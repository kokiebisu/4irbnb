import { createStorage } from "../src/storage";

describe("Storage Service", () => {
  it("createStorage", () => {
    const service = createStorage();
    service.create({ storageName: "nextbnb-test" });
  });
});
