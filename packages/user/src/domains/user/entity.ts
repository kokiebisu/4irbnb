import { BaseEntity } from "@4irbnb/common";
import { IEntity, IEntityProps } from "./types";

/**
 * @public Enwraps the logics for the User entity
 */
export class Entity extends BaseEntity<IEntity> {
  private constructor(props: any) {
    super(props);
  }

  static create(props: IEntityProps) {
    return new Entity(props);
  }

  get fullName() {
    return this.props.fullName;
  }
}
