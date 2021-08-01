import { IAuthService } from "../services/types";
import {
  IAuthControllerAuthorizeParams,
  IAuthControllerConstructorParams,
} from "./types";

export class AuthController {
  #service: IAuthService;
  constructor({ service }: IAuthControllerConstructorParams) {
    this.#service = service;
  }

  /**
   * Generates Allow or Deny policy
   * @returns
   */
  async authorize({
    authorizationToken,
    resource,
  }: IAuthControllerAuthorizeParams) {
    /**
     * @public
     * Validates the authorization token with the Identity Provider
     */
    // const claims = await this.#service.validateToken({ authorizationToken });
    // const policyStatements = await this.#service.convertClaimsToPolicyStatements(
    //   { claims }
    // );

    const iamPolicy = this.#service.generateIAMPolicy({
      awsAccountNumber,
      apiGatewayNumber,
    });
    return iamPolicy;
  }

  /**
   * @public
   * Signs up the user
   */
  signup() {
    /**
     * Checks if the user exists already
     */
    /**
     * If user doesn't exist, send an event to User service to create a new user
     */
  }

  /**
   * @public
   * Logs in the user
   */
  login() {
    /**
     * Authenticate using Auth0
     */
    /**
     * Retrieve user from Users Service
     */
    /**
     * Return user
     */
  }
}
