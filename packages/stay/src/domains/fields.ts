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
interface IReviews {
  value: number;
}

export class Reviews extends ValueObject<IReviews> {
  private constructor(props: IReviews) {
    super(props);
  }

  public static create(reviews: number): Reviews {
    if (
      reviews === undefined ||
      reviews === null ||
      typeof reviews === "number"
    ) {
      throw new Error("imgUrls were not valid");
    } else {
      return new Reviews({ value: reviews });
    }
  }
}

// ------------------------------------------------------------------
interface IAverageRatings {
  value: number;
}

export class AverageRatings extends ValueObject<IAverageRatings> {
  private constructor(props: IAverageRatings) {
    super(props);
  }

  public static create(averageRatings: number): AverageRatings {
    if (
      averageRatings === undefined ||
      averageRatings === null ||
      typeof averageRatings === "number"
    ) {
      throw new Error("averateRatings were not valid");
    } else {
      return new AverageRatings({ value: averageRatings });
    }
  }
}

// ------------------------------------------------------------------
interface ICity {
  value: string;
}

export class City extends ValueObject<ICity> {
  private constructor(props: ICity) {
    super(props);
  }

  public static create(city: string): City {
    if (city === undefined || city === null || typeof city === "string") {
      throw new Error("city were not valid");
    } else {
      return new City({ value: city });
    }
  }
}

// ------------------------------------------------------------------
interface IProvince {
  value: string;
}

export class Province extends ValueObject<IProvince> {
  private constructor(props: IProvince) {
    super(props);
  }

  public static create(province: string): Province {
    if (
      province === undefined ||
      province === null ||
      typeof province === "string"
    ) {
      throw new Error("province were not valid");
    } else {
      return new Province({ value: province });
    }
  }
}

// ------------------------------------------------------------------
interface ICountry {
  value: string;
}

export class Country extends ValueObject<ICountry> {
  private constructor(props: ICountry) {
    super(props);
  }

  public static create(country: Country.Type): Country {
    if (country === undefined || country === null) {
      throw new Error("country were not valid");
    } else {
      return new Country({ value: country });
    }
  }
}

export namespace Country {
  export enum Type {
    CA = "Canada",
  }
}

// ------------------------------------------------------------------

interface IHostingType {
  value: string;
}

export class HostingType extends ValueObject<IHostingType> {
  private constructor(props: IHostingType) {
    super(props);
  }

  public static create(hostingType: HostingType.Type) {
    if (hostingType === undefined || hostingType === null) {
      throw new Error("hostingType were not valid");
    } else {
      return new HostingType({ value: hostingType });
    }
  }
}

export namespace HostingType {
  export enum Type {
    RentalUnit = "RentalUnit",
    GuestSuite = "GuestSuite",
  }
}

// ------------------------------------------------------------------

export interface IGuests {
  value: number;
}

export class Guests extends ValueObject<IGuests> {
  private constructor(props: IGuests) {
    super(props);
  }

  public static create(numberOfGuests: number) {
    if (numberOfGuests === undefined || numberOfGuests === null) {
      throw new Error("guests were not valid");
    } else {
      return new Guests({ value: numberOfGuests });
    }
  }
}

// ------------------------------------------------------------------

export interface IBedrooms {
  value: number;
}

export class Bedrooms extends ValueObject<IBedrooms> {
  private constructor(props: IBedrooms) {
    super(props);
  }

  public static create(numberOfBedrooms: number) {
    if (numberOfBedrooms === undefined || numberOfBedrooms === null) {
      throw new Error("bedrooms were not valid");
    } else {
      return new Bedrooms({ value: numberOfBedrooms });
    }
  }
}

// ------------------------------------------------------------------

export interface IBeds {
  value: number;
}

export class Beds extends ValueObject<IBeds> {
  private constructor(props: IBeds) {
    super(props);
  }

  public static create(numberOfBeds: number) {
    if (numberOfBeds === undefined || numberOfBeds === null) {
      throw new Error("beds were not valid");
    } else {
      return new Beds({ value: numberOfBeds });
    }
  }
}

// ------------------------------------------------------------------

export interface IBaths {
  value: number;
}

export class Baths extends ValueObject<IBaths> {
  private constructor(props: IBaths) {
    super(props);
  }

  public static create(numberOfBaths: number) {
    if (numberOfBaths === undefined || numberOfBaths === null) {
      throw new Error("baths were not valid");
    } else {
      return new Baths({ value: numberOfBaths });
    }
  }
}
