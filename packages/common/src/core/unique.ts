import { v4 as uuid } from "uuid";

export class UniqueIdentifier {
  public value: string;
  constructor() {
    this.value = uuid();
  }

  equals(target?: UniqueIdentifier): boolean {
    if (target === null || target === undefined) {
      return false;
    }
    if (!(target instanceof this.constructor)) {
      return false;
    }
    return target.value === this.value;
  }

  toString() {
    return String(this.value);
  }
}
