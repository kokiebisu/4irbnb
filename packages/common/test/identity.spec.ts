import { createIdentityService } from "../src";

describe("Identity Service", () => {
  const service = createIdentityService();
  it("gets caller's identity", async () => {
    const result = await service.retrieveCallerAccountId();
    expect(result).not.toBeNull();
  });
});
