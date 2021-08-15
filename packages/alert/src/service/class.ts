import { SlackClient } from "../infra/slack";
import {
  IAlertClient,
  IAlertClientConstructorParams,
  IAlertService,
  IAlertServiceSendFileParams,
  IAlertServiceSendMessageParams,
} from "./types";

export class AlertService implements IAlertService {
  #client: IAlertClient;
  private constructor({ client }: IAlertClientConstructorParams) {
    this.#client = client;
  }

  public static async create() {
    return new AlertService({ client: await SlackClient.create() });
  }

  async sendMessage({ to, from, message }: IAlertServiceSendMessageParams) {
    await this.#client.sendMessage({ to, from, message });
  }

  async sendFile({ to, file, comment }: IAlertServiceSendFileParams) {
    await this.#client.sendFile({ to, file, comment });
  }
}
