export class Identifier {
  private readonly value: string;
  constructor(value: string) {
    this.value = value;
  }

  /**
   * @public Checks the equality of the two values
   * @param target
   */
  public equals(target?: Identifier): boolean {
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
