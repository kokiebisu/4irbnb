import { IHost, IHostConstructor } from './type';

/**
 * @public
 * A class contains the information about the host
 *
 */
export class Host {
  #firstName: string;
  #lastName: string;
  #createdAt: Date;

  constructor({ firstName, lastName, createdAt }: IHostConstructor) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#createdAt = createdAt;
  }

  get(): IHost {
    return {
      firstName: this.#firstName,
      lastName: this.#lastName,
      createdAt: this.#createdAt,
    };
  }
}
