// Service
export interface IManagerService {
  get(params: IManagerServiceGetParams): Promise<string | undefined>;
  set(params: IManagerServiceSetParams): Promise<void>;
  delete(params: IManagerServiceDeleteParams): Promise<void>;
}

// Constructor
export interface IManagerServiceConstructorProps {
  client: IConfigClient;
}

// Params
export interface IManagerServiceGetParams extends IConfigClientGetProps {}

export interface IManagerServiceSetParams extends IConfigClientSetProps {}

export interface IManagerServiceDeleteParams extends IConfigClientDeleteProps {}

/**
 * @public
 */
export interface IConfigClient {
  get(params: IConfigClientGetProps): Promise<string | undefined>;
  set(params: IConfigClientSetProps): Promise<void>;
  delete(params: IConfigClientDeleteProps): Promise<void>;
}

/**
 * @public
 */
export interface ISSMClientConstructorProps {
  region: string;
  groupName: string;
}

export interface IManagerServiceInitializeProps {
  groupName: string;
  region: string;
}

/**
 * @public
 */
export interface IConfigClientGetProps {
  key: string;
}

/**
 * @public
 */
export interface IConfigClientSetProps {
  key: string;
  value: string;
}

/**
 * @public
 */
export interface IConfigClientDeleteProps {
  key: string;
}

export interface IConfigClientCreateProps {
  region: string;
  groupName: string;
}
