import { IStay } from "./types";

/**
 * @public
 * Blueprint of the Stay instance
 */
export class Stay implements Entity<IStay> {
  props: IStay;

  private constructor(props: IStay) {
    this.props = props;
  }

  create() {}
}
