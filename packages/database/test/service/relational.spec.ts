// import { data, dataSchema, tableName } from "./mock";
import { RelationalDatabaseService } from "../../src/service";

describe("Relational Database Service", () => {
  // beforeAll(async () => {
  //   await service.insert({
  //     tableName: "TestService",
  //     data: {
  //       property1: "test",
  //     },
  //   });
  // });
  it.skip("retrieves added data", async () => {
    const service = await RelationalDatabaseService.initialize({
      region: "us-east-1",
      tableName: "Stay",
    });
    const result = await service.findByAttributes({
      attributes: { id: 1, title: "Stay Title" },
    });
    console.debug("result", result);
    expect(result).not.toBeNull();
  }, 20000);
  it("creates data", async () => {
    const service = await RelationalDatabaseService.initialize({
      region: "us-east-1",
      tableName: "Stay",
    });
    const stayData = {
      title: "Test Stay",
      city: "Test City",
      province: "Test Province",
      country: "Test Country",
      img_urls: ["imgUrl1", "imgUrl2"],
      hosting_type: "Entire rental unit",
      guests: 1,
      beds: 1,
      baths: 1,
      bedrooms: 1,
    };
    const result = await service.create({
      data: stayData,
    });
    expect(result).not.toBeNull();
  }, 20000);
  // it("deletes data", async () => {
  //   await service.delete({ tableName, identifier: { id: data.id } });
  //   const result = await service.findOne({
  //     tableName,
  //     identifier: { id: data.id },
  //   });
  //   expect(result).toBeNull();
  // });
});
