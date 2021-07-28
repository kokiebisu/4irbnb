/**
 * @public
 * Type of environment
 *
 * @remarks
 * Either 'production' or 'development'
 */
export type TEnvironment = "production" | "development";

export interface IEnvironment {
  environment: TEnvironment;
}
