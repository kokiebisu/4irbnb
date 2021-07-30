import { createDatabase } from "@nextbnb/database";
import { StayService } from "../src/services/class";
import { data } from "./data";

describe("delete", () => {
  it("removes data properly from database", async () => {
    const db = createDatabase({ region: "us-east-1" });
    const service = new StayService({
      db,
      idValidator: () => {
        return true;
      },
    });

    await service.delete({ identifier: data.id });
    const stay = await service.get({ identifier: data.id });
    expect(stay).toBeNull();
  });
});
