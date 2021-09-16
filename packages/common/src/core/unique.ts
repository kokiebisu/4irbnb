import { v4 as uuid } from "uuid";

export class UniqueIdentifier {
  private readonly value: string;
  constructor(value?: string) {
    if (value) {
      this.value = value;
    } else {
      this.value = uuid();
    }
  }

  /**
   * @public Checks the equality of the two values
   * @param target
   */
  public equals(target?: UniqueIdentifier): boolean {
    if (target === null || target === undefined) {
      return false;
    }
    if (!(target instanceof this.constructor)) {
      return false;
    }
    return target.value === this.value;
  }

  /**
   * @public Converts the identifier
   * @access public
   */
  public toString() {
    return this.value;
  }
}

export interface IWithUniqueIdentifer {
  id: UniqueIdentifier;
}
