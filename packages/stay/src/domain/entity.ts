import { Entity } from "@4irbnb/common";
import { IStay } from "./types";

/**
 * @public
 * Blueprint of the Stay instance
 */
export class Stay extends Entity<IStay> {
  private constructor(props: any) {
    super(props);
  }

  create(props: IStay) {
    return new Stay(props);
  }
}
