// import { data, dataSchema, tableName } from "./mock";
import { RelationalDatabaseService } from "../src/service";

describe("Relational Database Service", async () => {
  const service = await RelationalDatabaseService.initialize({
    region: "us-east-1",
    tableName: "Stay",
  });
  // beforeAll(async () => {
  //   await service.insert({
  //     tableName: "TestService",
  //     data: {
  //       property1: "test",
  //     },
  //   });
  // });
  it("retrieves added data", async () => {
    const result = await service.findByAttributes({ attributes: {} });
    console.log("RESULT", result);
    expect(result).not.toBeNull();
  });
  // it("deletes data", async () => {
  //   await service.delete({ tableName, identifier: { id: data.id } });
  //   const result = await service.findOne({
  //     tableName,
  //     identifier: { id: data.id },
  //   });
  //   expect(result).toBeNull();
  // });
});
