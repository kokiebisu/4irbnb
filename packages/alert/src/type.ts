export interface IMessage {
  emoji: string;
  text: string;
}

export interface IFile {
  filetype: "pdf";
  content: Buffer;
  filename: string;
}

export interface IAlertService {
  sendMessage(to: string, from: string, message: IMessage): Promise<void>;
  sendFile(to: string, file: IFile, comment?: string): Promise<void>;
}
