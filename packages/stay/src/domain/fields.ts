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

interface ImageProps {
  value: string;
}

export class Image extends ValueObject<ImageProps> {
  private constructor(props: ImageProps) {
    super(props);
  }

  public static create(props: ImageProps): Image {
    if (
      Array.isArray(props.value) &&
      props.value.every((url) => typeof url === "string")
    ) {
      return new Image(props);
    } else {
      throw new Error("imgUrls were not valid");
    }
  }
}
