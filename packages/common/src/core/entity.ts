import { UniqueIdentifier } from "./unique";

export abstract class BaseEntity<T> {
  public readonly id: UniqueIdentifier;
  public readonly props: Omit<T, "id">;

  constructor(id: UniqueIdentifier, props: Omit<T, "id">) {
    this.id = id;
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
