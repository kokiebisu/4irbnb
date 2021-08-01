import {
  IIdentityClient,
  IIdentityServiceConstructorParams,
  IIdentityService,
} from "./types";

export class IdentityService implements IIdentityService {
  #client: IIdentityClient;

  /**
   * @public
   * @param param0
   */
  constructor({ client }: IIdentityServiceConstructorParams) {
    this.#client = client;
  }

  /**
   * @public
   * Retrieves AccountId
   * @returns
   */
  async retrieveCallerAccountId() {
    return await this.#client.retrieveCallerAccountId();
  }
}
