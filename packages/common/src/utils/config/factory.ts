import { ConfigService } from "./class";
import { SSMClient } from "./ssm";

export const createConfigService = () =>
  new ConfigService({ client: new SSMClient({ region: "us-east-1" }) });
