import { APIGatewayClient } from "./api-gateway";
import { STSClient } from "./sts";
import { IIdentityServiceConstructorParams } from "./types";

export class IdentityService {
  #stsClient: STSClient;
  #apiGatewayClient: APIGatewayClient;

  /**
   * @public
   * @param param0
   */
  constructor({
    stsClient,
    apiGatewayClient,
  }: IIdentityServiceConstructorParams) {
    this.#stsClient = stsClient;
    this.#apiGatewayClient = apiGatewayClient;
  }

  /**
   * @public
   * Retrieves AccountId
   * @returns
   */
  async retrieveCallerAccountId() {
    return await this.#stsClient.retrieve();
  }

  /**
   * @public
   */
  async retrieveCallerRouterId() {
    return await this.#apiGatewayClient.retrieve();
  }
}
