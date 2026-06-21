import { describe, expect, it } from "vitest";
import {
  buildRequestUrl,
  getResourceInvalidationTargets,
  resolveEndpointTarget,
  type ResourceMap,
} from "../src/resources/index";

describe("resource contract", () => {
  it("resolves string endpoints", () => {
    expect(resolveEndpointTarget("GET /api/users")).toEqual({
      method: "GET",
      endpoint: "/api/users",
      params: {},
      client: "main",
    });
  });

  it("resolves resource references", () => {
    const resources: ResourceMap = {
      users: {
        method: "GET",
        endpoint: "/api/users",
        client: "admin",
        params: { limit: 10 },
      },
    };

    expect(
      resolveEndpointTarget(
        { resource: "users", params: { page: 2 } },
        resources,
      ),
    ).toEqual({
      method: "GET",
      endpoint: "/api/users",
      params: { limit: 10, page: 2 },
      client: "admin",
    });
  });

  it("builds request urls with path params and query params", () => {
    expect(
      buildRequestUrl("/api/users/{id}", { id: 42, tab: "profile" }),
    ).toBe("/api/users/42?tab=profile");
  });

  it("collects transitive invalidation targets", () => {
    const resources: ResourceMap = {
      users: {
        endpoint: "/api/users",
        invalidates: ["teams"],
      },
      teams: {
        endpoint: "/api/teams",
      },
      roster: {
        endpoint: "/api/roster",
        dependsOn: ["teams"],
      },
    };

    expect(getResourceInvalidationTargets("users", resources)).toEqual([
      "teams",
      "roster",
    ]);
  });
});
