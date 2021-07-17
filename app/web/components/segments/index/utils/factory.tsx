import { IndexSegmentProps } from "..";
import { AnywhereSegment } from "../anywhere";
import { BannerSegment } from "../banner";
import { CategorySegment } from "../category";
import { DestinationsSegment } from "../destinations";
import { NearbySegment } from "../nearby";

export const factory = (props: IndexSegmentProps) => {
  switch (props.variant) {
    case "anywhere":
      return <AnywhereSegment />;
    case "banner":
      return <BannerSegment />;
    case "category":
      return <CategorySegment />;
    case "destinations":
      return <DestinationsSegment />;
    case "nearby":
      return <NearbySegment />;
    default:
      throw new Error("[Index Page]");
  }
};
