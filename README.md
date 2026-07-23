# Frontend Contract

`@lastshotlabs/frontend-contract` is the canonical shared contract package for
Snapshot and Pocketshot.

It owns the frontend data model that must mean the same thing across both apps.
It does not own app-specific runtime behavior, renderer implementation details,
or platform-specific component implementations.

## Registry setup

`@lastshotlabs/*` packages are published to **GitHub Packages**, not the public npm
registry. They're public, but GitHub still requires authentication to install them.
One-time setup:

1. Create a GitHub [personal access token](https://github.com/settings/tokens/new)
   with the **`read:packages`** scope.
2. Add to your project's `.npmrc` (or `~/.npmrc`):

   ```ini
   @lastshotlabs:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```

3. Export the token where you install: `export GITHUB_TOKEN=ghp_…` (do the same in CI).

The default registry stays npmjs.org, so your other dependencies are unaffected.

## Install

```sh
bun add @lastshotlabs/frontend-contract
```

## What This Package Owns

- Refs and dynamic value primitives
  - `FromRef`
  - `ExprRef`
  - `FROM_REF_TRANSFORMS`
  - shared ref helpers such as `isFromRef`, `isExprRef`, and nested ref
    traversal utilities
- Shared manifest sections
  - `state`
  - `resources`
  - `workflows`
  - `policies`
  - `i18n`
- Shared manifest leaf contracts
  - env refs
  - resource declarations
  - workflow declarations
  - policy declarations
  - i18n declarations
- Shared token contract
  - token schema and token types
- Shared action contract
  - action schemas and shared action types
- Shared state declarations
  - `StateValueConfig`
  - `StateConfigMap`
  - `StateScope`
  - `StatePersistConfig`

## What This Package Does Not Own

- Snapshot manifest compilation
- Snapshot route matching and runtime providers
- Pocketshot screen rendering
- Jotai registries and React providers
- platform-specific action execution
- component registries and component implementations
- universal styling runtime implementation

## Rule Of Thumb

If a shape must serialize the same way and carry the same meaning in Snapshot
and Pocketshot, it belongs here.

If a piece of code exists to execute, render, mount, fetch, subscribe, animate,
or integrate with a specific runtime, it belongs in the app package that owns
that runtime.

## Current Consumers

- Snapshot uses this package as the canonical source for:
  - refs
  - env/resource/action/i18n/policy/workflow/token contracts
  - shared state declaration types
- Pocketshot uses this package as the canonical source for:
  - refs
  - shared manifest section types
  - shared resource/workflow/policy/i18n/state contracts

## Next Major Boundary

The next non-trivial extraction is not another leaf type.

The next major decision is how much of the manifest runtime layer should become
shared:

- shared manifest compiler input/output contracts only
- shared workflow runtime contract
- shared state runtime contract
- shared component metadata contract

That work should happen intentionally and not be mixed into platform-specific
styling or renderer changes.
