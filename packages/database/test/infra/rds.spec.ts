// import { data, dataSchema, tableName } from "./mock";

import { IRelationalDatabaseClientInitializeProps } from "../../../database/src";
import { RDSClient } from "../../../database/src/infra/rds";

const ctx: IRelationalDatabaseClientInitializeProps = {
  serviceName: "RelationalDatabaseService",
  region: "us-east-1",
};

describe("RDS Client", () => {
  it("initializes successfully", async () => {
    const service = await RDSClient.initialize(ctx);
    expect(service).not.toBeNull();
  });
  // it("creates a table", async () => {
  //   const service = await RDSClient.initialize(ctx);

  //   const result = await service.execute({
  //     sql: `CREATE TABLE test (
  //       id AUTO_INCREMENT NOT NULL,
  //       name CHAR(30) NOT NULL,
  //       PRIMARY KEY (id)
  //     );`,
  //   });

  //   console.debug("RESULT", result);
  // }, 20000);
  // it.only("inserts a row", async () => {
  //   const service = await RDSClient.initialize(ctx);

  //   const result = await service.execute({
  //     sql: `INSERT INTO test (name) VALUES ('Ken');`,
  //   });

  //   console.debug("RESULT", result);
  // }, 20000);
});
