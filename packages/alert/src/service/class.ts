import { SlackClient } from "../infra/slack";
import {
  IAlertClient,
  IAlertService,
  IAlertServiceConstructorParams,
  IAlertServiceSendFileParams,
  IAlertServiceSendMessageParams,
} from "./types";

export class AlertService implements IAlertService {
  #client: IAlertClient;
  private constructor({ client }: IAlertServiceConstructorParams) {
    this.#client = client;
  }

  public static async initialize() {
    return new AlertService({ client: await SlackClient.initialize() });
  }

  async sendMessage({ to, from, message }: IAlertServiceSendMessageParams) {
    await this.#client.sendMessage({ to, from, message });
  }

  async sendFile({ to, file, comment }: IAlertServiceSendFileParams) {
    await this.#client.sendFile({ to, file, comment });
  }
}
