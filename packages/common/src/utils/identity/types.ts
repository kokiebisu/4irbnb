export interface IIdentityService extends IIdentityClient {}

export interface IIdentityClient {
  retrieveCallerAccountId(): Promise<any>;
}

export interface IIdentityServiceConstructorParams {
  client: IIdentityClient;
}
