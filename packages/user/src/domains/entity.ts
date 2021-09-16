import { BaseEntity } from "@4irbnb/common";
import { Email } from "./fields";
import { IEntity, IEntityProps } from "./types";

/**
 * @public Enwraps the logics for the User entity
 */
export class Entity extends BaseEntity<IEntity> {
  private constructor(props: any) {
    super(props);
  }

  static create(props: IEntityProps | IEntity) {
    return new Entity(props);
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
