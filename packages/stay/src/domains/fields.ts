import { ValueObject } from "@4irbnb/common";

// ------------------------------------------------------------------
interface ITitle {
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

// ------------------------------------------------------------------
interface IImgUrl {
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

// ------------------------------------------------------------------
interface INumberOfReviews {
  value: number;
}

export class NumberOfReviews extends ValueObject<INumberOfReviews> {
  private constructor(props: INumberOfReviews) {
    super(props);
  }

  public static create(numberOfReviews: number): NumberOfReviews {
    if (
      numberOfReviews === undefined ||
      numberOfReviews === null ||
      typeof numberOfReviews === "string"
    ) {
      throw new Error("imgUrls were not valid");
    } else {
      return new NumberOfReviews({ value: numberOfReviews });
    }
  }
}

// ------------------------------------------------------------------
interface IAverageRatings {
  value: number;
}

export class AverateRatings extends ValueObject<IAverageRatings> {
  private constructor(props: IAverageRatings) {
    super(props);
  }

  public static create(averageRatings: number): AverateRatings {
    if (
      averageRatings === undefined ||
      averageRatings === null ||
      typeof averageRatings === "string"
    ) {
      throw new Error("averateRatings were not valid");
    } else {
      return new AverateRatings({ value: averageRatings });
    }
  }
}

// ------------------------------------------------------------------
