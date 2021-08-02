import { createStorageService } from "../src/utils/storage";
import { storageData } from "./mock";

describe.skip("Storage Service", () => {
  const service = createStorageService();
  const { storageName, key, content } = storageData;
  it("checks if created storage exists", async () => {
    await service.createStorage({ storageName });
    const exists = await service.validateStorage({
      storageName,
    });
    expect(exists).toBeTruthy();
  });
  it("creates an object inside the created storage", async () => {
    await service.store({ storageName, data: content, key });
    const object = await service.retrieve({ storageName, key });
    expect(object).not.toBeNull();
  });
  it("removes the specified object inside the created storage", async () => {
    await service.remove({ storageName, key });
    const object = await service.retrieve({ storageName, key });
    expect(object).toBeNull();
  });
  it("removes the specified storage properly", async () => {
    await service.deleteStorage({ storageName });
    const exists = await service.validateStorage({
      storageName,
    });
    expect(exists).toBeFalsy();
  });
});
