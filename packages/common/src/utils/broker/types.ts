import { IRegion } from "../../types";

export interface IBrokerService {}

export interface IBrokerClient {}

export interface IBrokerServiceConstructorParams {
  client: IBrokerClient;
}

export interface ISQSClientConstructorParams extends IRegion {}
