import { createDatabase } from "@nextbnb/database";
import { StayService } from "../src/services/class";
import { data } from "./data";

describe.skip("get", () => {
  it("retrieves value", async () => {
    const db = createDatabase({ region: "us-east-1" });
    const service = new StayService({
      db,
      idValidator: () => {
        return true;
      },
    });

    const stay = await service.get({ identifier: data.id });
    expect(stay).not.toBeNull();
  });
});
