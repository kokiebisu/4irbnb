import { send, setApiKey } from "@sendgrid/mail";

import {
  PackageEnum,
  LoggerService,
  ILoggerService,
  InternalError,
} from "@4irbnb/common";
import { IEmailClient, IEmailClientSendProps } from "../types";

/**
 * @public
 */
export class SendGridClient implements IEmailClient {
  #logger: ILoggerService;

  private constructor() {
    this.#logger = LoggerService.create({
      packageName: PackageEnum.common,
      className: "SendGridClient",
    });
  }

  public static async create() {
    const apiKey = await createConfigService().get({
      packageName: PackageEnum.common,
      key: "utils/email",
    });
    if (!apiKey) {
      throw new InternalError({
        location: "configureClient:get",
        message: "Invalid key provided",
      });
    }
    setApiKey(apiKey);

    return new SendGridClient();
  }

  async send({ to, message }: IEmailClientSendProps) {
    try {
      await send({
        to,
        from: "a01056715@gmail.com",
        subject: "Subject",
        text: message,
        html: message,
      });
    } catch (error: any) {
      this.#logger.error({ location: "send:send", message: error });
    }
  }
}
