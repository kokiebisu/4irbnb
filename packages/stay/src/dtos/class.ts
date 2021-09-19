import { Entity } from "../domains";
import { IDataTransferObject } from "./types";

/**
 * @public
 */
export class DataTransferObject implements IDataTransferObject {
  #id: string;
  #title: string;

  /**
   * @public Represents the data transfer object for the Stay domain. This is required in order to encapsulates the utilities attached to the
   * @access private
   * @param source
   */
  private constructor(source: Entity) {
    this.#id = source.id.toString();
    this.#title = source.title.getValue();
  }

  public static create(entity: Entity) {
    return new DataTransferObject(entity);
  }

  /**
   * @public Retrieves the id property
   * @access public
   */
  public get id() {
    return this.#id;
  }

  /**
   * @public Retrieves the title property
   * @access public
   */
  public get title() {
    return this.#title;
  }
}
