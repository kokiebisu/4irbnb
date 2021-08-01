import { AuthService } from "./class";
import { OktaService } from "./okta";

export const createAuthService = () =>
  new AuthService({ service: new OktaService() });
