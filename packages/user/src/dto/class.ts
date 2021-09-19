import { Entity } from "../domains";
import { IDataTransferObject } from "./types";

/**
 * @public
 */
export class DataTransferObject implements IDataTransferObject {
  #id: string;
  #firstName: string;
  #lastName: string;
  #email: string;
  public constructor(entity: Entity) {
    this.#id = entity.id.toString();
    this.#firstName = entity.fullName.getValue().firstName;
    this.#lastName = entity.fullName.getValue().lastName;
    this.#email = entity.email.getValue();
  }

  get id() {
    return this.#id;
  }

  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get email() {
    return this.#email;
  }
}
