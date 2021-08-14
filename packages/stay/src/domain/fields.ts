import { ValueObject } from "@4irbnb/common";

export class Title extends ValueObject<string> {
  private constructor(props: string) {
    super(props);
  }

  public static create(title: string): Title {
    if (title === undefined || title === null) {
      throw new Error("Provided argument was undefined or null");
    } else {
      return new Title(title);
    }
  }
}

export class ImgUrl extends ValueObject<string> {
  private constructor(props: string) {
    super(props);
  }

  public static create(imgUrl: string): ImgUrl {
    if (imgUrl === undefined || imgUrl === null || typeof imgUrl === "string") {
      throw new Error("imgUrls were not valid");
    } else {
      return new ImgUrl(imgUrl);
    }
  }
}
