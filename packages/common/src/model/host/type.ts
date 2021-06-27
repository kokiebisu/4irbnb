/**
 * @public
 * Params to be passed to create the Host instance
 */
export interface IHostConstructor {
  firstName: string;
  lastName: string;
  createdAt: Date;
}

/**
 * @public
 * Interface for the Host
 */
export interface IHost extends IHostConstructor {}
