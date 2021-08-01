import { createAuthService } from "../src";
import { data } from "./mock";

describe("Auth Service", () => {
  const service = createAuthService();
  it("generates IAM policies correctly", async () => {
    service.generateIAMPolicy({
      claims: [{ method: "*", path: "*" }],
    });
  });
});
