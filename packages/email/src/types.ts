export interface IEmailService {
  send(args: IEmailServiceSendProps): Promise<void>;
}

export interface IEmailServiceConstructorProps {
  client: IEmailClient;
}

export interface IEmailServiceSendProps extends IEmailClientSendProps {}

/**
 * @public
 */
export interface IEmailClient {
  send(args: IEmailClientSendProps): Promise<void>;
}

/**
 * @public
 */
export interface IEmailClientSendProps {
  to: string;
  message: string;
}
