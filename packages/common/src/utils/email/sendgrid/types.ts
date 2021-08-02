import { IEmailServiceSendParams } from "../types";

export interface IEmailClient {
  send(params: IEmailServiceSendParams): Promise<void>;
}

export interface IEmailClientSendParams {
  to: string;
  message: string;
}
