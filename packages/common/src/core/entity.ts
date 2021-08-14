import { UniqueIdentifier } from "./unique";

export abstract class Entity<T> {
  protected readonly id: UniqueIdentifier;
  public readonly props: T;

  constructor(props: T) {
    this.id = new UniqueIdentifier();
    this.props = props;
  }

  equals(target: Entity<T>) {
    return this.id.equals(target.id);
  }
}
