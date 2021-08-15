import { SendGridClient } from "./sendgrid";
import {
  IEmailClient,
  IEmailService,
  IEmailServiceConstructorProps,
  IEmailServiceSendProps,
} from "./types";

/**
 * @public
 */
export class EmailService implements IEmailService {
  #client: IEmailClient;

  private constructor({ client }: IEmailServiceConstructorProps) {
    this.#client = client;
  }

  public static async create() {
    return new EmailService({ client: await SendGridClient.create() });
  }

  /**
   * @public
   * Sends message
   * @param param0
   */
  public async send({ to, message }: IEmailServiceSendProps) {
    await this.#client.send({ to, message });
  }
}
