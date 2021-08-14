export interface ObjectProps {
  [key: string]: any;
}

export abstract class ValueObject<T extends ObjectProps> {
  public props: T;

  constructor(props: T) {
    this.props = props;
  }

  public equals(valueObject: ValueObject<T>) {
    return JSON.stringify(this.props) === JSON.stringify(valueObject.props);
  }
}
