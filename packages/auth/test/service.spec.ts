import { createAuthService } from "../src";

describe("Auth Service", () => {
  const service = createAuthService();
  it("generates allow policy correctly", async () => {
    const result = await service.generateAllowPolicy({
      claims: [{ method: "*", path: "*" }],
    });
    console.info("result", JSON.stringify(result));
  });
  it("generates deny policy correctly", async () => {
    const result = await service.generateDenyPolicy();
    console.info("result", JSON.stringify(result));
  });
});
