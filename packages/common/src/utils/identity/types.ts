import { APIGatewayClient } from "./api-gateway";
import { STSClient } from "./sts";

export interface IIdentityService extends IIdentityClient {}

export interface IIdentityClient {
  retrieve(): Promise<any>;
}

export interface IIdentityServiceConstructorParams {
  stsClient: STSClient;
  apiGatewayClient: APIGatewayClient;
}
