import { createDatabase } from "../src";
import { data, dataSchema, tableName } from "./mock";

describe("Database Service", () => {
  const service = createDatabase({ region: "us-east-1" });
  beforeAll(async () => {
    await service.insert({ tableName, data: dataSchema });
  });
  it("retrieves added data", async () => {
    const result = await service.findOne({
      tableName,
      identifier: { id: data.id },
    });
    expect(result).not.toBeNull();
  });
  it("deletes data", async () => {
    await service.delete({ tableName, identifier: { id: data.id } });
    const result = await service.findOne({
      tableName,
      identifier: { id: data.id },
    });
    expect(result).toBeNull();
  });
});
