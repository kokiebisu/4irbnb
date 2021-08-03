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
   * @public
   * Generates Allow or Deny policy
   * @returns
   */
  async authorize({ authorization, resource }: IAuthControllerAuthorizeParams) {
    if (!authorization) {
      return this.#service.generateDenyPolicy();
    }
    const token = authorization.replace("Bearer ", "");
    const valid = await this.#service.validateToken({ token });
    if (!valid) {
      return this.#service.generateDenyPolicy();
    }
    return this.#service.generateAllowPolicy({ resource });
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
