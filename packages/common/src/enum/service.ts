/**
 * @public
 * List of all the Services
 */
export enum ServiceEnum {
  Auth = "AuthService",
  Slack = "SlackService",
}

/**
 * @public
 */
export interface IServiceName {
  serviceName: ServiceEnum;
}
