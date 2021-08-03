import { IEmailClient, IEmailClientSendParams } from "./sendgrid";

export interface IEmailService extends IEmailClient {}

export interface IEmailServiceConstructorParams {
  client: IEmailClient;
}

export interface IEmailServiceSendParams extends IEmailClientSendParams {}
