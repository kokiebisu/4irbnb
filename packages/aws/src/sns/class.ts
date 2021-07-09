import { SNSClient } from "@aws-sdk/client-sns";
import { IAWSServiceConstructor } from "../type";

export class SNS {
  service: SNSClient;

  constructor({ region }: IAWSServiceConstructor) {
    this.service = new SNSClient({ region });
  }
}
