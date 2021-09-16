import { UniqueIdentifier } from "@4irbnb/common";
import { Entity } from "../domains";
import { Email, FullName } from "../domains/fields";
import { DataTransferObject, IDataTransferObject } from "../dto";

export class Mapper {
  public static convertToDTO(entity: Entity) {
    return new DataTransferObject(entity);
  }

  public static convertToEntity(data: IDataTransferObject) {
    if (data.id) {
      throw new Error("id property missing");
    }
    if (data.firstName) {
      throw new Error("firstName property missing");
    }
    if (data.lastName) {
      throw new Error("lastName property missing");
    }
    if (data.email) {
      throw new Error("email property missing");
    }
    return Entity.create({
      id: new UniqueIdentifier(data.id),
      fullName: FullName.create(data.firstName, data.lastName),
      email: Email.create(data.email),
    });
  }
}
