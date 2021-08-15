import { IEmailService } from "./types";

/**
 * @public
 */
export class EmailService implements IEmailService {
  #client: IEmailClient;

  private constructor({ client }: IEmailServiceConstructorParams) {
    this.#client = client;
  }

  create;

  /**
   * @public
   * Sends message
   * @param param0
   */
  send({ to, message }: IEmailServiceSendParams) {
    this.#client.send({ to, message });
  }
}
