import { createDatabase } from "@4irbnb/common";
import { StayService } from "../src/services/class";
import { data } from "./data";

describe("post", () => {
  const db = createDatabase({ region: "us-east-1" });
  const service = new StayService({
    db,
    idValidator: () => {
      return true;
    },
  });
  afterAll(async () => {
    await service.delete({
      identifier: {
        id: data.id,
      },
    });
  });
  it("inserts data", async () => {
    await service.post({ data });
    const stay = await service.get({
      identifier: {
        id: data.id,
      },
    });
    expect(stay).not.toBeNull();
  });
});
