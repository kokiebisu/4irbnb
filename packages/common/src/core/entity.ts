import { UniqueIdentifier } from "./unique";

export abstract class BaseEntity<T> {
  public readonly id: UniqueIdentifier;
  public readonly props: T;

  constructor(props: T) {
    this.id = new UniqueIdentifier();
    this.props = props;
  }

  isEqualTo(target: BaseEntity<T>): boolean {
    if (target === null) {
      return false;
    }
    if (!Object.is(target.id, this.id)) {
      return false;
    }
    if (!Object.is(target.props, target.props)) {
      return false;
    }
    return true;
  }
}
