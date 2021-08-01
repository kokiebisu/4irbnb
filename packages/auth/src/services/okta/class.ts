import { Client } from "@okta/okta-sdk-nodejs";
import { IAuthService, IAuthServiceRegisterParams } from "../types";

export class OktaService implements IAuthService {
  #client: any;

  private configureClient() {
    if (!this.#client) {
      this.#client = new Client({});
    }
  }

  async validateToken() {
    /**
     * Okta validation
     */
    return true;
  }

  async register({
    firstName,
    lastName,
    birthYear,
    birthMonth,
    birthDay,
    email,
    password,
  }: IAuthServiceRegisterParams) {
    this.configureClient();
    const newUser = {
      profile: {
        firstName,
        lastName,
        email,
        login: email,
        birthYear,
        birthMonth,
        birthDay,
      },
      credentials: {
        password: {
          value: password,
        },
      },
    };
    const user = await this.#client.createUser(newUser);
    return user;
  }

  async login() {
    this.configureClient();
  }
}
