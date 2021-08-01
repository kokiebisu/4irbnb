import { createConfig } from "../src/utils/config";
import { configData } from "./mock";

describe.skip("Config Service", () => {
  const service = createConfig();
  const { packageName, key, value } = configData;

  it("creates param", async () => {
    await service.set({ packageName, key, value });
  });
  it("gets param", async () => {
    const retrievedValue = await service.get({ packageName, key });
    expect(retrievedValue).toEqual(value);
  });
  it("deletes param", async () => {
    await service.delete({ packageName, key });
    const retrievedValue = await service.get({ packageName, key });
    expect(retrievedValue).toBeUndefined();
  });
});
