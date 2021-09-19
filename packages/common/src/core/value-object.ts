export type TValueObject = string | number | { [key: string]: any };

/**
 * @public Enwraps the logics for objects that don't contain identifiers
 */
export abstract class ValueObject<T extends TValueObject> {
  private readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  public equals(valueObject: ValueObject<T>) {
    return JSON.stringify(this.value) === JSON.stringify(valueObject.value);
  }

  public getValue() {
    return this.value;
  }
}
