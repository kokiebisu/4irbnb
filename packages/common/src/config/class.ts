import {
  IConfigService,
  IConfigServiceConstructorParams,
  IConfigServiceDeleteParams,
  IConfigServiceGetParams,
  IConfigServiceSetParams,
} from "./types";

export class ConfigService {
  #service: IConfigService;
  constructor({ service }: IConfigServiceConstructorParams) {
    this.#service = service;
  }

  async get({ packageName, key }: IConfigServiceGetParams) {
    return await this.#service.get({ packageName, key });
  }

  async set({ packageName, key, value }: IConfigServiceSetParams) {
    await this.#service.set({ packageName, key, value });
  }

  async delete({ packageName, key }: IConfigServiceDeleteParams) {
    await this.#service.delete({ packageName, key });
  }
}
