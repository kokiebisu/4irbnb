import { PackageEnum } from "../src/enum";

export const storageData = {
  storageName: "nextbnb-test",
  key: "test key",
  content: "test data",
};

export const configData = {
  packageName: PackageEnum.common,
  key: "test_key",
  value: "test_value",
};

export const tableName = "TestService";

export const dataSchema = {
  id: {
    S: "test",
  },
  property: {
    S: "test property",
  },
};

export const data = {
  id: "test",
};
