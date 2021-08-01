import {
  IAlertServiceSendFileParams,
  IAlertServiceSendMessageParams,
} from "../types";

export interface IAlertClientSendMessageParams
  extends IAlertServiceSendMessageParams {}

export interface IAlertClientSendFileParams
  extends IAlertServiceSendFileParams {}
