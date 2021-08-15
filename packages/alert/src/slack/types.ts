import {
  IAlertServiceSendFileParams,
  IAlertServiceSendMessageParams,
} from "../types";

export interface IAlertClient {}

export interface IAlertClientSendMessageParams
  extends IAlertServiceSendMessageParams {}

export interface IAlertClientSendFileParams
  extends IAlertServiceSendFileParams {}

export interface ISlackClientConstructorProps {
  token: string;
}
