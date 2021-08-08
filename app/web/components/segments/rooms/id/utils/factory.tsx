import { SegmentProps } from "..";
import { AmenitiesSegment } from "../amenities";
import { ArrangementsSegment } from "../arrangements";
import { DescriptionSegment } from "../description";
import { HostSegment } from "../host";
import { OtherSegment } from "../other";
import { PreviewSegment } from "../preview";
import { ReviewsSegment } from "../reviews";

export const factory = (props: SegmentProps) => {
  switch (props.variant) {
    case "amenities":
      return <AmenitiesSegment />;
    case "arrangements":
      return <ArrangementsSegment />;
    case "description":
      return <DescriptionSegment />;
    case "host":
      return <HostSegment />;
    case "other":
      return <OtherSegment />;
    case "preview":
      return <PreviewSegment />;
    case "reviews":
      return <ReviewsSegment />;
    default:
      throw new Error(`[Invalid variant]: Rooms segment`);
  }
};
