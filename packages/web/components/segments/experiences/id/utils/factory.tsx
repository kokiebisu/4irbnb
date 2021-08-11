import { SegmentProps } from "..";
import { AvailableSegment } from "../available";
import { BringSegment } from "../bring";
import { CharacteristicsSegment } from "../characteristics";
import { DescriptionSegment } from "../description";
import { ExperiencesSegment } from "../experiences";
import { HostSegment } from "../host";
import { KnowSegment } from "../know";
import { ParticipateSegment } from "../participate";
import { PreviewSegment } from "../preview";
import { ReviewsSegment } from "../reviews";

export const factory = (props: SegmentProps) => {
  switch (props.variant) {
    case "available":
      return <AvailableSegment />;
    case "bring":
      return <BringSegment />;
    case "characteristics":
      return <CharacteristicsSegment />;
    case "description":
      return <DescriptionSegment />;
    case "experiences":
      return <ExperiencesSegment />;
    case "host":
      return <HostSegment />;
    case "know":
      return <KnowSegment />;
    case "participate":
      return <ParticipateSegment />;
    case "preview":
      return <PreviewSegment />;
    case "reviews":
      return <ReviewsSegment />;
    default:
      throw new Error(`[Invalid variant] Experiences`);
  }
};
