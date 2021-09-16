import { BaseEntity } from "@4irbnb/common";
import {
  // Guests, ImgUrl,
  Title,
} from "./fields";
import { IEntity, IEntityProps } from "./types";

/**
 * @public Enwraps the logics for the Stay entity
 */
export class Entity extends BaseEntity<IEntity> {
  private constructor(props: any) {
    super(props);
  }

  static create(props: IEntityProps | IEntity) {
    return new Entity(props);
  }

  get title() {
    return this.props.title;
  }

  // get city() {
  //   return this.props.city;
  // }

  // get province() {
  //   return this.props.province;
  // }

  // get country() {
  //   return this.props.country;
  // }

  // get imgUrls() {
  //   return this.props.imgUrls;
  // }

  // get guests() {
  //   return this.props.guests;
  // }

  // get bedrooms() {
  //   return this.props.bedrooms;
  // }

  // get baths() {
  //   return this.props.baths;
  // }

  // get beds() {
  //   return this.props.beds;
  // }

  public changeTitle(title: string) {
    this.props.title = Title.create(title);
  }

  // public changeImgUrls(value: string[]) {
  //   this.props.imgUrls = value.map((url) => ImgUrl.create(url));
  // }

  // public changeGuests(value: number) {
  //   this.props.guests = Guests.create(value);
  // }
}
