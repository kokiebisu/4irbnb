import { WebClient } from "@slack/web-api";
import {
  ConfigUtils,
  LoggerUtils,
  ILoggerUtils,
  InternalError,
  PackageEnum,
} from "@4irbnb/common";
import {
  IAlertClient,
  IAlertClientSendFileParams,
  IAlertClientSendMessageParams,
  ISlackClientConstructorProps,
} from "./types";

export class SlackClient implements IAlertClient {
  #package?: WebClient;
  #logger: ILoggerUtils;

  private constructor({ token }: ISlackClientConstructorProps) {
    this.#logger = LoggerUtils.create({
      packageName: PackageEnum.common,
      className: "SlackClient",
    });
    this.#package = new WebClient(token);
  }

  public static async create() {
    const config = ConfigUtils.create();
    const token = await config.get({
      packageName: PackageEnum.common,
      key: "utils/alert",
    });
    if (!token) {
      throw new InternalError({
        location: "configureClient:{!token}",
        message: "Unable to retrieve token",
      });
    }

    return new SlackClient({ token });
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
