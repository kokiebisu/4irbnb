import { APIGatewayClient } from "./api-gateway";
import { IdentityService } from "./class";
import { STSClient } from "./sts";

export const createIdentityService = () =>
  new IdentityService({
    stsClient: new STSClient({ region: "us-east-1" }),
    apiGatewayClient: new APIGatewayClient(),
  });
