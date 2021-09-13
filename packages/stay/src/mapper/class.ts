import { IDataTransferObjectProps } from "../dtos/stay/types";

/**
 * @public Converts the domain object into the requested format
 */
export class Mapper {
  /**
   * @public Converts the provided Stay data transfer object into an usable Stay entity
   * @access public
   * @param data
   */
  public static convertToEntity(data: IDataTransferObjectProps) {
    throw new Error("Logic not implemented yet");
  }

  /**
   * @public Converts the provided Stay entity into a data transfer object
   */
  public static convertToDTO() {
    throw new Error("Logic not implemented yet");
  }
}
