export class Identifier<T> {
  constructor(private value: T) {
    this.value = value;
  }

  equals(target?: Identifier<T>): boolean {
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
