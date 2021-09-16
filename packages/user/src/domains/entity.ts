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

  public get fullName() {
    return this.props.fullName;
  }

  public get email() {
    return this.props.email;
  }
}
