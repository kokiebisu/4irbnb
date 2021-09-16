import { UniqueIdentifier } from "@4irbnb/common";
import { Email, FullName } from "./fields";

/**
 * @public
 */
export interface IEntityProps {
  fullName: FullName;
  email: Email;
}

/**
 * @public
 */
export interface IEntity extends IEntityProps {
  id: UniqueIdentifier;
}
