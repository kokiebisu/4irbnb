import { createEmailService } from "../src";

describe.skip("Email Service", () => {
  const service = createEmailService();
  it("sends email properly", async () => {
    await service.send({ to: "kenichikona@gmail.com", message: "Test" });
  });
});
