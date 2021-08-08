import { createDatabase } from "@4irbnb/common";
import { StayService } from "../src/services/class";
import { data } from "./data";

describe("delete", () => {
  const db = createDatabase({ region: "us-east-1" });
  let stay;
  const service = new StayService({
    db,
    idValidator: () => {
      return true;
    },
  });
  beforeAll(async () => {
    await service.post({ data });
  });
  /** TESTS */
  it("removes data properly from database", async () => {
    await service.delete({ identifier: { id: data.id } });
    stay = await service.get({ identifier: { id: data.id } });
    expect(stay).toBeNull();
  });
});
