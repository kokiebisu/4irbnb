import { IBrokerClient, ISQSClientConstructorParams } from "../types";
import { SQSClient as Client } from "@aws-sdk/client-sqs";

export class SQSClient implements IBrokerClient {
  #package: Client;
  constructor({ region }: ISQSClientConstructorParams) {
    this.#package = new Client({ region });
    console.log(this.#package);
  }
}
