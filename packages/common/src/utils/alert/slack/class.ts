import { WebClient } from "@slack/web-api";
import { IAlertService } from "../types";
import {
  IAlertClientSendFileParams,
  IAlertClientSendMessageParams,
} from "./types";

export class SlackAlertService implements IAlertService {
  #package: WebClient;

  constructor(token: string) {
    this.#package = new WebClient(token);
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
    const { channels } = await this.#package.conversations.list();

    const channelId =
      channels?.find((channel) => to === channel.name)?.id || null;
    if (!channelId) {
      throw new Error(
        "[@slack-alert-service#sendMessage] Unable to find channel from the channel name"
      );
    }

    await this.#package.chat.postMessage({
      username: from,
      icon_emoji: message.emoji,
      text: message.text,
      channel: channelId,
    });
  }

  async sendFile({
    to,
    file,
    comment,
  }: IAlertClientSendFileParams): Promise<void> {
    const { filetype, content, filename } = file;
    const { channels } = await this.#package.conversations.list();

    const channelId =
      channels?.find((channel) => to === channel.name)?.id || null;

    if (!channelId) {
      throw new Error(
        "[@slack-alert-service#sendFile] Unable to find channel from the channel name"
      );
    }

    await this.#package.files.upload({
      filetype,
      file: content,
      filename,
      channel: channelId,
      initial_comment: comment,
    });
  }
}
