import { v4 as uuid } from "uuid";
import { UniqueIdentifier } from "@4irbnb/common";
import { Entity } from "../domains";
import { IEntityProps } from "../domains/types";

/**
 * @public Creates the User domain object. During the process, it attaches the appropriate identifier
 */
export class Factory {
  public create(props: IEntityProps) {
    const id = new UniqueIdentifier(uuid());
    return new Entity(id, props);
  }
}
