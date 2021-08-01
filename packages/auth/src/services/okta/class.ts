import { IAuthService } from "../types";

export class OktaService implements IAuthService {
  async validateToken() {
    /**
     * Okta validation
     */
    return true;
  }
}
