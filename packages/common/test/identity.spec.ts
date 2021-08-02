import { createIdentityService } from "../src";

describe("Identity Service", () => {
  const service = createIdentityService();
  // it("gets caller's account id", async () => {
  //   const result = await service.retrieveCallerAccountId();
  //   expect(typeof result).toBe("string");
  // });
  it("gets caller's api gateway id", async () => {
    const result = await service.retrieveCallerRouterId();
    console.log(result);
  });
});
