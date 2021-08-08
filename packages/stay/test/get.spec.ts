import { createDatabase } from "@4irbnb/common";
import { StayService } from "../src/services/class";
import { data } from "./data";

describe("get", () => {
  const db = createDatabase({ region: "us-east-1" });
  const service = new StayService({
    db,
    idValidator: () => {
      return true;
    },
  });
  beforeAll(async () => {
    await service.post({ data });
  });
  afterAll(async () => {
    await service.delete({ identifier: { id: data.id } });
  });
  it("retrieves value", async () => {
    const stay = await service.get({ identifier: { id: data.id } });
    expect(stay).not.toBeNull();
  });
});
