export type TValueObject = string | number;

export abstract class ValueObject<T extends TValueObject> {
  public props: T;

  constructor(props: T) {
    this.props = props;
  }

  public equals(valueObject: ValueObject<T>) {
    return JSON.stringify(this.props) === JSON.stringify(valueObject.props);
  }
}
