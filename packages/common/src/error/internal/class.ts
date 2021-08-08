import { InternalErrorConstructorParams } from "./types";

export class InternalError extends Error {
  #location: string;
  constructor({ location, message }: InternalErrorConstructorParams) {
    super(message);
    this.#location = location;
  }

  get location() {
    return this.#location;
  }
}
