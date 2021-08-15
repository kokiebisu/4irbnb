export interface IEmailService extends IEmailClient {}

export interface IEmailServiceConstructorProps {
  client: IEmailClient;
}

export interface IEmailServiceSendProps extends IEmailClientSendProps {}

/**
 * @public
 */
export interface IEmailClient {
  send(args: IEmailServiceSendProps): Promise<void>;
}

/**
 * @public
 */
export interface IEmailClientSendProps {
  to: string;
  message: string;
}
