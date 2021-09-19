import { IWithUniqueIdentifer } from "..";
import { UniqueIdentifier } from "./unique";

export abstract class BaseEntity<T extends IWithUniqueIdentifer> {
  public readonly id: UniqueIdentifier;
  public readonly props: Omit<T, "id">;

  constructor(props: T) {
    const { id, ...rest } = props;
    if (!id) {
      this.id = new UniqueIdentifier();
    } else {
      this.id = id;
    }

    this.props = rest;
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
