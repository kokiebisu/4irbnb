import { createDatabase } from "@nextbnb/database";
import { StayService } from "../src/services/class";
import { data } from "./data";

describe.skip("post", () => {
  it("inserts data", async () => {
    const db = createDatabase({ region: "us-east-1" });
    const service = new StayService({
      db,
      idValidator: () => {
        return true;
      },
    });

    await service.post({ data });
    const stay = await service.get({
      identifier: {
        id: data.id,
      },
    });
    expect(stay).not.toBeNull();
  });
});
