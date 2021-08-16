import { PACKAGE_NAME } from "database/src";

export const storageData = {
  storageName: "4irbnb-test",
  key: "test key",
  content: "test data",
};

export const configData = {
  packageName: PACKAGE_NAME,
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
