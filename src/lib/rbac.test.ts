import { describe, expect, it } from "vitest";
import { hasPermission, resolveRolesFromClaims } from "./rbac";

describe("Converse RBAC", () => {
  it("grants wildcard permissions to administrators", () => expect(hasPermission(["admin"], "settings.manage")).toBe(true));
  it("keeps access policy away from operators", () => expect(hasPermission(["teammate"], "access.manage")).toBe(false));
  it("maps identity groups", () => expect(resolveRolesFromClaims({ groups: ["converse-managers"] })).toEqual(["support_admin"]));
});
