import {
  IIdentityClient,
  IIdentityServiceConstructorParams,
  IIdentityService,
} from "./types";

export class IdentityService implements IIdentityService {
  #client: IIdentityClient;

  constructor({ client }: IIdentityServiceConstructorParams) {
    this.#client = client;
  }

  async retrieveCallerAccountId() {
    return await this.#client.retrieveCallerAccountId();
  }
}
