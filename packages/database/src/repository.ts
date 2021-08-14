import { IDatabaseService, RepositoryConstructorProps } from "./types";

export abstract class Repository<T> {
  #db: IDatabaseService<T>;
  constructor({ db }: RepositoryConstructorProps<T>) {
    this.#db = db;
  }

  abstract create(): null;
  abstract findById(): T;
  async update(args) {
    await this.#db.update(args);
  }
  async delete(args) {
    await this.#db.delete(args);
  }
}
