/**
 * @public
 */
export interface IMessage {
  emoji: string;
  text: string;
}

/**
 * @public
 */
export interface IFile {
  filetype: "pdf";
  content: Buffer;
  filename: string;
}

/**
 * @public
 */
export interface IAlertService {
  sendMessage(params: IAlertServiceSendMessageParams): Promise<void>;
  sendFile(params: IAlertServiceSendFileParams): Promise<void>;
}

export interface IAlertServiceConstructorParams {
  client: IAlertClient;
}

/**
 * @public
 */
export interface IAlertClient {
  sendMessage(params: IAlertClientSendMessageParams): Promise<void>;
  sendFile(params: IAlertClientSendFileParams): Promise<void>;
}

/**
 * @public
 */
export interface IAlertServiceSendMessageParams {
  to: string;
  from: string;
  message: IMessage;
}

/**
 * @public
 */
export interface IAlertServiceSendFileParams {
  to: string;
  file: any;
  comment: string;
}

export interface IAlertClientConstructorParams {
  client: IAlertClient;
}

export interface IAlertClientSendMessageParams {
  to: string;
  from: string;
  message: IMessage;
}

export interface IAlertClientSendFileParams {
  to: string;
  file: string;
  comment: string;
}

export interface ISlackClientConstructorProps {
  token: string;
}
