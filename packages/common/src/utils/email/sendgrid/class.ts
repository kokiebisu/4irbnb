import { MailService, send, setApiKey } from "@sendgrid/mail";
import { PackageEnum } from "../../../enum";
import { InternalError } from "../../../error";
import { createConfigService } from "../../config";
import { createLoggerService, ILoggerService } from "../../logger";
import { IEmailClient, IEmailClientSendParams } from "./types";

export class SendGridClient implements IEmailClient {
  #package?: MailService;
  #logger: ILoggerService;
  constructor() {
    this.#logger = createLoggerService({
      packageName: PackageEnum.common,
      className: "SendGridClient",
    });
  }

  async #configureClient() {
    if (!this.#package) {
      try {
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
      } catch (error: any) {
        if (error instanceof InternalError) {
          const { location, message } = error;
          this.#logger.error({ location, message });
        } else {
          this.#logger.error({ location: "configureClient", message: error });
        }
      }
    }
  }

  async send({ to, message }: IEmailClientSendParams) {
    await this.#configureClient();
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
