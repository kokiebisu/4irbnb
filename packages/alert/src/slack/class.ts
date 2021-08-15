import { WebClient } from "@slack/web-api";
import { PackageEnum } from "../../../common/src/enum";
import { InternalError } from "../../../common/src/error";
import { createConfigService } from "../../../common/src/utils/config";
import {
  createLoggerService,
  ILoggerService,
} from "../../../common/src/utils/logger";
import {
  IAlertClient,
  IAlertClientSendFileParams,
  IAlertClientSendMessageParams,
} from "./types";

export class SlackClient implements IAlertClient {
  #package?: WebClient;
  #logger: ILoggerService;

  constructor() {
    this.#logger = createLoggerService({
      packageName: PackageEnum.common,
      className: "SlackClient",
    });
  }

  async #configureClient() {
    if (!this.#package) {
      const service = createConfigService();
      try {
        const token = await service.get({
          packageName: PackageEnum.common,
          key: "utils/alert",
        });
        if (!token) {
          throw new InternalError({
            location: "configureClient:{!token}",
            message: "Unable to retrieve token",
          });
        }
        this.#package = new WebClient(token);
      } catch (error: any) {
        if (error instanceof InternalError) {
          const { location, message } = error;
          this.#logger.error({ location, message });
        } else {
          this.#logger.error({
            location: "configureClient:get",
            message: error,
          });
        }
      }
    }
  }

  /**
   * @public
   * Sends message to given Slack channel name
   *
   * @param params
   */
  async sendMessage({
    to,
    from,
    message,
  }: IAlertClientSendMessageParams): Promise<void> {
    await this.#configureClient();

    try {
      if (!this.#package) {
        throw new InternalError({
          location: "sendMessage:{!this.#package}",
          message: "Package wasn't configured",
        });
      }
      const { channels } = await this.#package.conversations.list();

      const channelId =
        channels?.find((channel) => to === channel.name)?.id || null;
      if (!channelId) {
        throw new InternalError({
          location: "sendMessage:{!channelId}",
          message: "Unable to find channel from the channel name",
        });
      }

      await this.#package.chat.postMessage({
        username: from,
        icon_emoji: message.emoji,
        text: message.text,
        channel: channelId,
      });
    } catch (error: any) {
      if (error instanceof InternalError) {
        const { location, message } = error;
        this.#logger.error({
          location,
          message,
        });
      } else {
        this.#logger.error({
          location: "sendMessage",
          message: error,
        });
      }
    }
  }

  /**
   * @public
   * @param param0
   */
  async sendFile({
    to,
    file,
    comment,
  }: IAlertClientSendFileParams): Promise<void> {
    await this.#configureClient();
    try {
      if (!this.#package) {
        throw new InternalError({
          location: "sendFile:{!this.#package}",
          message: "Package wasn't configured",
        });
      }
      const { channels } = await this.#package.conversations.list();
      const { filetype, content, filename } = file;
      const channelId =
        channels?.find((channel) => to === channel.name)?.id || null;

      if (!channelId) {
        throw new InternalError({
          location: "sendFile:{!channelId}",
          message: "Unable to find channel from the channel name",
        });
      }

      await this.#package.files.upload({
        filetype,
        file: content,
        filename,
        channel: channelId,
        initial_comment: comment,
      });
    } catch (error: any) {
      if (error instanceof InternalError) {
        const { location, message } = error;
        this.#logger.error({
          location,
          message,
        });
      } else {
        this.#logger.error({
          location: "sendMessage",
          message: error,
        });
      }
    }
  }
}
