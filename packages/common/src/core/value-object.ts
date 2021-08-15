export type TValueObject = {
  [index: string]: any;
};

export abstract class ValueObject<T extends TValueObject> {
  public readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public equals(valueObject: ValueObject<T>) {
    return JSON.stringify(this.props) === JSON.stringify(valueObject.props);
  }
}
