import { createConfig } from "../src/config";
import { configData } from "./mock";

const pause = (ms) => new Promise((res) => setTimeout(res, ms));

describe("Config Service", () => {
  const service = createConfig();
  const { packageName, key, value } = configData;

  it("creates param", async () => {
    await service.set({ packageName, key, value });
    pause(2000);
  });
  it("gets param", async () => {
    const retrievedValue = await service.get({ packageName, key });
    expect(retrievedValue).toEqual(value);
    pause(1000);
  });
  it("deletes param", async () => {
    await service.delete({ packageName, key });
    const retrievedValue = await service.get({ packageName, key });
    expect(retrievedValue).toBeUndefined();
  });
});
