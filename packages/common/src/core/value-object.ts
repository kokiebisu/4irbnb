export type TValueObject = string | number;

export abstract class ValueObject<T extends TValueObject> {
  private readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  public equals(valueObject: ValueObject<T>) {
    return JSON.stringify(this.value) === JSON.stringify(valueObject.value);
  }

  public toValue() {
    return this.value;
  }
}
