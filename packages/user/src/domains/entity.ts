import { BaseEntity, Identifier } from "@4irbnb/common";
import { Email } from "./fields";
import { IEntity, IEntityProps } from "./types";

/**
 * @public Enwraps the logics for the User entity
 */
export class Entity extends BaseEntity<IEntity> {
  public constructor(id: Identifier, props: IEntityProps) {
    super(id, props);
  }

  public get fullName() {
    return this.props.fullName;
  }

  public get email() {
    return this.props.email;
  }

  public changeEmail(email: string) {
    this.props.email = Email.create(email);
  }
}
