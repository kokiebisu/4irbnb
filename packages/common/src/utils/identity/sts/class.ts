import { STS } from "@aws-sdk/client-sts";
import { IIdentityClient } from "../types";
import { STSClientConstructorParams } from "./types";

export class STSClient implements IIdentityClient {
  #package: STS;
  constructor({ region }: STSClientConstructorParams) {
    this.#package = new STS({
      region,
    });
  }
  async retrieve() {
    return (await this.#package.getCallerIdentity({})).Account;
  }
}
