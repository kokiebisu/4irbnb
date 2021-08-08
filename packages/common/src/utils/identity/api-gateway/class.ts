import { IIdentityClient } from "../types";

export class APIGatewayClient implements IIdentityClient {
  // #package: ApiGatewayV2Client;

  constructor() {
    // this.#package = new ApiGatewayV2Client({
    //   region,
    // });
  }

  /**
   * @public
   * Retrieves the API ID of the given API resource name
   */
  async retrieve() {
    return "8u5a5u56y7";
  }
}
