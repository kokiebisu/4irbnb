import { Client } from "@okta/okta-sdk-nodejs";
import {
  IAuthClient,
  IAuthServiceLoginParams,
  IAuthServiceRegisterParams,
  IAuthServiceValidateTokenParams,
} from "../types";
import * as Verifier from "@okta/jwt-verifier";
import { createLogger, ILoggerService, PackageEnum } from "@nextbnb/common";

/**
 * Implementation of the AuthService using the Okta Client
 */
export class OktaClient implements IAuthClient {
  #package: any;
  #verifier: any;
  #logger: ILoggerService;

  /**
   * @public
   */
  constructor() {
    this.#logger = createLogger({
      packageName: PackageEnum.auth,
      className: "OktaService",
    });
  }

  /**
   * @public
   */
  private async configureClient() {
    if (!this.#package) {
      this.#package = new Client({});
    }
  }

  /**
   * @public
   */
  private async configureVerifier() {
    const issuer = "sdfa";
    if (!this.#verifier) {
      this.#verifier = new Verifier({
        issuer,
      });
    }
  }

  /**
   * @public
   * Okta's implemntation of validating the token
   * @param param0
   * @returns
   */
  async validateToken({ authorizationToken }: IAuthServiceValidateTokenParams) {
    await this.configureVerifier();
    /**
     * Okta validation
     */
    try {
      const jwt = await this.#verifier.verifyAccessToken(
        authorizationToken,
        "api://default"
      );
      return !!jwt;
    } catch (error) {
      this.#logger.error({
        location: "validateToken:verifyAccessToken",
        message: "jwt not returned",
      });
      return false;
    }
  }

  /**
   * Okta's implementation of registering users
   * @param param0
   * @returns
   */
  async register({ data }: IAuthServiceRegisterParams) {
    await this.configureClient();
    const newUser = {
      profile: {
        data,
      },
      credentials: {
        password: {
          value: data.password,
        },
      },
    };
    try {
      const user = await this.#package.createUser(newUser);
      return user;
    } catch (error) {
      this.#logger.error({
        location: "register:createUser",
        message: error as string,
      });
      return null;
    }
  }

  /**
   * @public
   * Okta's implementation of logging in users
   */
  async login({ email, password }: IAuthServiceLoginParams) {
    await this.configureClient();
  }
}
