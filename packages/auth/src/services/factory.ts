import { AuthService } from "./class";
import { OktaClient } from "./okta";

export const createAuthService = () =>
  new AuthService({ client: new OktaClient() });
