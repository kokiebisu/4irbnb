import {
  Baths,
  Bedrooms,
  Beds,
  City,
  Country,
  Guests,
  HostingType,
  ImgUrl,
  Province,
  Stay,
  Title,
} from "..";
import { stay } from "../mocks";
import { TRawStay } from "./types";

export class StayMapper {
  public static convertToDomain(data: TRawStay[]) {
    const result = data.map((stayRaw: any, reviewRaw: any) => {
      return Stay.create({
        title: Title.create(stayRaw[1]["stringValue"]),
        city: City.create(stayRaw[2]["stringValue"]),
        province: Province.create(stayRaw[3]["stringValue"]),
        country: Country.create(stayRaw[4]["stringValue"]),
        imgUrls: stayRaw[5]["arrayValue"][
          "stringValues"
        ].map((imgUrl: string) => ImgUrl.create(imgUrl)),
        hostingType: HostingType.create(stayRaw[6]["stringValue"]),
        guests: Guests.create(stayRaw[7]["longValue"]),
        bedrooms: Bedrooms.create(stayRaw[9]["longValue"]),
        beds: Beds.create(stayRaw[10]["longValue"]),
        baths: Baths.create(stayRaw[11]["longValue"]),
      });
    });
    return result;
  }

  public static convertToRaw() {}

  public static convertToDTO() {}
}
