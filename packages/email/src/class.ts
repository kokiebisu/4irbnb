import { IEmailClient } from "./sendgrid";
import {
  IEmailServiceConstructorParams,
  IEmailServiceSendParams,
} from "./types";

/**
 * @public
 */
export class EmailService {
  #client: IEmailClient;

  constructor({ client }: IEmailServiceConstructorParams) {
    this.#client = client;
  }

  /**
   * @public
   * Sends message
   * @param param0
   */
  send({ to, message }: IEmailServiceSendParams) {
    this.#client.send({ to, message });
  }
}
