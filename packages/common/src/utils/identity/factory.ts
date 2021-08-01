import { IdentityService } from "./class";
import { STSClient } from "./sts";

export const createIdentityService = () =>
  new IdentityService({ client: new STSClient({ region: "us-east-1" }) });
