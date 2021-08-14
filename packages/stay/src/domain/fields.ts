import { ValueObject } from "@4irbnb/common";

interface TitleProps {
  value: string;
}

export class Title extends ValueObject<TitleProps> {
  private constructor(props: TitleProps) {
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

interface ImgUrlProps {
  value: string;
}

export class ImgUrl extends ValueObject<ImgUrlProps> {
  private constructor(props: ImgUrlProps) {
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
