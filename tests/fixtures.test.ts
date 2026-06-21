import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { actionSchema } from "../src/actions";
import { i18nConfigSchema } from "../src/i18n";
import { collectPolicyRefs } from "../src/policies";
import { fromRefSchema } from "../src/refs";
import { resourceConfigSchema } from "../src/resources";
import { stateConfigMapSchema } from "../src/state";
import { themeConfigSchema } from "../src/tokens";
import { workflowDefinitionSchema } from "../src/workflows";

function readFixture<T>(relativePath: string): T {
  return JSON.parse(
    readFileSync(
      new URL(`../fixtures/${relativePath}`, import.meta.url),
      "utf8",
    ),
  ) as T;
}

describe("shared fixtures", () => {
  it("validates the auth fixture", () => {
    const fixture = readFixture<{
      policies: Record<string, unknown>;
      i18n: unknown;
      state: unknown;
    }>("auth/authenticated-route.json");

    expect(
      collectPolicyRefs(fixture.policies["can-enter-dashboard"] as never),
    ).toEqual(new Set(["is-authenticated"]));
    expect(i18nConfigSchema.parse(fixture.i18n).default).toBe("en");
    expect(
      stateConfigMapSchema.parse(fixture.state)["session.user"],
    ).toBeDefined();
  });

  it("validates the data fixture", () => {
    const fixture = readFixture<{
      theme: unknown;
      resources: Record<string, unknown>;
      actions: Record<string, unknown>;
    }>("data/resource-list.json");

    expect(themeConfigSchema.parse(fixture.theme).flavor).toBe("ocean");
    expect(
      resourceConfigSchema.parse(fixture.resources["users.list"]).endpoint,
    ).toBe("/api/orgs/{orgId}/users");
    expect(actionSchema.parse(fixture.actions["load-users"]).type).toBe("api");
    expect(actionSchema.parse(fixture.actions["refresh-users"]).type).toBe(
      "refresh",
    );
  });

  it("validates the navigation fixture", () => {
    const fixture = readFixture<{ actions: Record<string, unknown> }>(
      "navigation/guarded-navigation.json",
    );

    expect(actionSchema.parse(fixture.actions["go-to-detail"]).type).toBe(
      "navigate",
    );
    expect(actionSchema.parse(fixture.actions["open-docs"]).type).toBe(
      "navigate-external",
    );
  });

  it("validates the overlays fixture", () => {
    const fixture = readFixture<{ actions: Record<string, unknown> }>(
      "overlays/overlay-actions.json",
    );

    expect(actionSchema.parse(fixture.actions["open-composer"]).type).toBe(
      "open-modal",
    );
    expect(actionSchema.parse(fixture.actions["close-composer"]).type).toBe(
      "close-modal",
    );
    expect(actionSchema.parse(fixture.actions["confirm-delete"]).type).toBe(
      "confirm",
    );
  });

  it("validates the state and refs fixture", () => {
    const fixture = readFixture<{
      state: unknown;
      refs: Record<string, unknown>;
    }>("state/state-and-refs.json");

    expect(
      stateConfigMapSchema.parse(fixture.state)["dashboard"],
    ).toBeDefined();
    expect(fromRefSchema.parse(fixture.refs["current-org"]).transform).toBe(
      "string",
    );
    expect(fromRefSchema.parse(fixture.refs["total-users"]).transform).toBe(
      "number",
    );
  });

  it("validates the workflow fixture", () => {
    const fixture = readFixture<{ workflows: Record<string, unknown> }>(
      "workflows/retry-capture.json",
    );

    expect(
      workflowDefinitionSchema.parse(fixture.workflows["users.save"]),
    ).toBeDefined();
  });
});
