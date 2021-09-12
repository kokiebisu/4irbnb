import { Entity } from "@4irbnb/common";
import { Guests, ImgUrl, Title } from "./fields";
import { IStay } from "./types";

/**
 * @public
 * Blueprint of the Stay instance
 */
export class Stay extends Entity<IStay> {
  private constructor(props: any) {
    super(props);
  }

  static create(props: IStay) {
    return new Stay(props);
  }

  get title() {
    return this.props.title;
  }

  get city() {
    return this.props.city;
  }

  get province() {
    return this.props.province;
  }

  get country() {
    return this.props.country;
  }

  get imgUrls() {
    return this.props.imgUrls;
  }

  get guests() {
    return this.props.guests;
  }

  get bedrooms() {
    return this.props.bedrooms;
  }

  get baths() {
    return this.props.baths;
  }

  get beds() {
    return this.props.beds;
  }

  public changeTitle(value: string) {
    this.props.title = Title.create(value);
  }

  public changeImgUrls(value: string[]) {
    this.props.imgUrls = value.map((url) => ImgUrl.create(url));
  }

  public changeGuests(value: number) {
    this.props.guests = Guests.create(value);
  }
}
