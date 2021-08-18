// import { data, dataSchema, tableName } from "./mock";

import { RDSClient } from "../../../database/src/infra/rds";

describe.skip("RDS Client", () => {
  it("retrieves added data", async () => {
    const service = await RDSClient.initialize({
      region: "us-east-1",
    });
    console.debug("SERVICE", service);
    // const result = await service.findByAttributes({
    //   attributes: { id: 1, title: "Stay Title" },
    // });
    // console.debug("result", result);
    // expect(result).not.toBeNull();
  });
});
