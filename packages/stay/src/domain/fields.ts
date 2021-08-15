import { ValueObject } from "@4irbnb/common";

export interface ITitle {
  value: string;
}

export class Title extends ValueObject<ITitle> {
  private constructor(props: ITitle) {
    super(props);
  }

  public static create(title: string): Title {
    if (title === undefined || title === null) {
      throw new Error("Provided argument was undefined or null");
    } else {
      return new Title({ value: title });
    }
  }
}

export interface IImgUrl {
  value: string;
}

export class ImgUrl extends ValueObject<IImgUrl> {
  private constructor(props: IImgUrl) {
    super(props);
  }

  public static create(imgUrl: string): ImgUrl {
    if (imgUrl === undefined || imgUrl === null || typeof imgUrl === "string") {
      throw new Error("imgUrls were not valid");
    } else {
      return new ImgUrl({ value: imgUrl });
    }
  }
}
