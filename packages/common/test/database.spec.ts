import { createDatabaseService } from "../src";
// import { data, dataSchema, tableName } from "./mock";

describe("DatabaseService Stay", () => {
  const service = createDatabaseService({ region: "us-east-1" });
  // beforeAll(async () => {
  //   await service.insert({
  //     tableName: "TestService",
  //     data: {
  //       property1: "test",
  //     },
  //   });
  // });
  it("retrieves added data", async () => {
    const result = await service.findOneByAttributes({
      tableName: "TestService",
      attributes: {
        property1: "test",
      },
    });
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

describe.skip("DatabaseService User", () => {
  // const service = createDatabaseService({ region: "us-east-1" });
  // // beforeAll(async () => {
  // //   await service.insert({ tableName: "UserService", data: dataSchema });
  // // });
  // it("retrieves added data", async () => {
  //   const result = await service.findOne({
  //     tableName: "UserService",
  //     identifier: { email: "some@gmail.com" },
  //   });
  //   console.log("RESULT", result);
  //   // expect(result).not.toBeNull();
  // });
});
