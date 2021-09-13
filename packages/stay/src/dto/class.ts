import { Domains as StayDomains } from "..";

export class StayData {
  #id: string;
  #title: string;

  /**
   * @public Represents the data transfer object for the Stay domain. This is required in order to encapsulates the utilities attached to the
   * @access private
   * @param source
   */
  public constructor(source: StayDomains.Stay.Entity) {
    this.#id = source.id.toString();
    this.#title = source.title.getValue();
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
