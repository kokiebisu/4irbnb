import { ConfigService } from "./class";
import { SSMClient } from "./ssm";

export const createConfig = () =>
  new ConfigService({ service: new SSMClient({ region: "us-east-1" }) });
