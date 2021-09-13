import { ValueObject } from "@4irbnb/common";

// ------------------------------------------------------------------
export class Title extends ValueObject<string> {
  private constructor(props: string) {
    super(props);
  }

  public static create(title: string): Title {
    if (title.length > 25) {
      throw new Error("Provided argument cannot be longer than 25 characters");
    }
    return new Title(title);
  }
}

// ------------------------------------------------------------------
export class ImgUrl extends ValueObject<string> {
  private constructor(props: string) {
    super(props);
  }

  public static create(value: string): ImgUrl {
    return new ImgUrl(value);
  }
}

// ------------------------------------------------------------------
export class Reviews extends ValueObject<number> {
  private constructor(props: number) {
    super(props);
  }

  public static create(value: number): Reviews {
    return new Reviews(value);
  }
}

// ------------------------------------------------------------------
export class AverageRatings extends ValueObject<number> {
  private constructor(props: number) {
    super(props);
  }

  public static create(value: number): AverageRatings {
    return new AverageRatings(value);
  }
}

// ------------------------------------------------------------------
export class City extends ValueObject<string> {
  private constructor(props: string) {
    super(props);
  }

  public static create(value: string): City {
    return new City(value);
  }
}

// ------------------------------------------------------------------
export class Province extends ValueObject<string> {
  private constructor(props: string) {
    super(props);
  }

  public static create(value: string): Province {
    return new Province(value);
  }
}

// ------------------------------------------------------------------
export class Country extends ValueObject<string> {
  private constructor(props: string) {
    super(props);
  }

  public static create(value: Country.Type): Country {
    return new Country(value);
  }
}

export namespace Country {
  export enum Type {
    CA = "Canada",
  }
}

// ------------------------------------------------------------------
export class HostingType extends ValueObject<HostingType.Type> {
  private constructor(props: HostingType.Type) {
    super(props);
  }

  public static create(value: HostingType.Type) {
    return new HostingType(value);
  }
}

export namespace HostingType {
  export enum Type {
    RentalUnit = "RentalUnit",
    GuestSuite = "GuestSuite",
  }
}

// ------------------------------------------------------------------
export class Guests extends ValueObject<number> {
  private constructor(props: number) {
    super(props);
  }

  public static create(value: number) {
    return new Guests(value);
  }
}

// ------------------------------------------------------------------
export class Bedrooms extends ValueObject<number> {
  private constructor(props: number) {
    super(props);
  }

  public static create(value: number) {
    return new Bedrooms(value);
  }
}

// ------------------------------------------------------------------
export class Beds extends ValueObject<number> {
  private constructor(props: number) {
    super(props);
  }

  public static create(value: number) {
    return new Beds(value);
  }
}

// ------------------------------------------------------------------
export class Baths extends ValueObject<number> {
  private constructor(props: number) {
    super(props);
  }

  public static create(value: number) {
    return new Baths(value);
  }
}
