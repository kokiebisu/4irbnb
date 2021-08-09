import { RDSClient as Client } from "@aws-sdk/client-rds";
import { IRDSClientConstructorParams } from "./types";

/**
 * @public
 */
export class RDSClient {
  #package: Client;

  constructor({ region }: IRDSClientConstructorParams) {
    this.#package = new Client({ region });
  }

  /**
   * @public
   * Retrieves a single data based on the provided id
   */
  findOneById() {}

  /**
   * @public
   * Retrieves a single data based on the provided unique identifier (etc. Email)
   */
  findOneByIdentifier() {}

  /**
   * @public
   * Retrieves all the data that meets the provided attributes criterias
   */
  findByAttributes() {}
}
