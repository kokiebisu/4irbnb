import { UniqueIdentifier } from "@4irbnb/common";
import { Entity } from "../domains";
import { Title } from "../domains/fields";
import { DataTransferObject } from "../dtos";
import { IDataTransferObject } from "../dtos/types";

/**
 * @public Converts the domain object into the requested format
 */
export class Mapper {
  /**
   * @public Converts the provided Stay data transfer object into an usable Stay entity
   * @access public
   * @param data
   */
  public static convertToEntity(data: IDataTransferObject) {
    if (data.id) {
      throw new Error("Id property missing");
    }
    if (data.title) {
      throw new Error("Title property missing");
    }
    return Entity.create({
      id: new UniqueIdentifier(data.id),
      title: Title.create(data.title),
    });
  }

  /**
   * @public Converts the provided Stay entity into a data transfer object
   * @access public
   */
  public static convertToDTO(entity: Entity) {
    return DataTransferObject.create(entity);
  }
}
