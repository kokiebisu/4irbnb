import { WebClient } from "@slack/web-api";
import { IFile } from "../type";
import { IAlertService, IMessage } from "../type";

export class SlackAlertService implements IAlertService {
  private client: WebClient;

  constructor(token: string) {
    this.client = new WebClient(token);
  }

  /**
   * @public
   * Sends message to given Slack channel name
   *
   * @param channelName
   * @param username
   * @param icon_emoji
   * @param text
   */
  async sendMessage(
    to: string,
    from: string,
    message: IMessage
  ): Promise<void> {
    const { channels } = await this.client.conversations.list();

    const channelId =
      channels?.find((channel) => to === channel.name)?.id || null;
    if (!channelId) {
      throw new Error(
        "[@slack-alert-service#sendMessage] Unable to find channel from the channel name"
      );
    }

    await this.client.chat.postMessage({
      username: from,
      icon_emoji: message.emoji,
      text: message.text,
      channel: channelId,
    });
  }

  async sendFile(to: string, file: IFile, comment: string): Promise<void> {
    const { filetype, content, filename } = file;
    const { channels } = await this.client.conversations.list();

    const channelId =
      channels?.find((channel) => to === channel.name)?.id || null;

    if (!channelId) {
      throw new Error(
        "[@slack-alert-service#sendFile] Unable to find channel from the channel name"
      );
    }

    await this.client.files.upload({
      filetype,
      file: content,
      filename,
      channel: channelId,
      initial_comment: comment,
    });
  }
}
