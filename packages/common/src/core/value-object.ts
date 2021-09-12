export type TValueObject = string | number;

export abstract class ValueObject<T extends TValueObject> {
  private readonly props: T;

  constructor(props: T) {
    this.props = props;
  }

  public equals(valueObject: ValueObject<T>) {
    return JSON.stringify(this.value) === JSON.stringify(valueObject.value);
  }

  public get value() {
    return this.props;
  }
}
