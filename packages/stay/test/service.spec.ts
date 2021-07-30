import { createDatabase } from "@nextbnb/database";
import { StayService } from "../src/services/class";

describe("Stay Service", () => {
  describe("get", () => {
    it("retrieves value", async () => {
      const db = createDatabase({ region: "us-east-1" });
      const service = new StayService({
        db,
        idValidator: () => {
          return true;
        },
      });

      const identifier = {
        KEY: {
          stayId: {
            S: "fsdafsdaf",
          },
        },
      };
      const stay = await service.get({ identifier });
      console.log("stay", stay);
    });
  });
});
