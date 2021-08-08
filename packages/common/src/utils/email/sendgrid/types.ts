import { IEmailServiceSendParams } from "../types";

/**
 * @public
 */
export interface IEmailClient {
  send(params: IEmailServiceSendParams): Promise<void>;
}

/**
 * @public
 */
export interface IEmailClientSendParams {
  to: string;
  message: string;
}
