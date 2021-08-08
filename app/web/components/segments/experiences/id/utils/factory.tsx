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
      return <AvailableSegment {...props} />;
    case "bring":
      return <BringSegment {...props} />;
    case "characteristics":
      return <CharacteristicsSegment {...props} />;
    case "description":
      return <DescriptionSegment {...props} />;
    case "experiences":
      return <ExperiencesSegment {...props} />;
    case "host":
      return <HostSegment {...props} />;
    case "know":
      return <KnowSegment {...props} />;
    case "participate":
      return <ParticipateSegment {...props} />;
    case "preview":
      return <PreviewSegment {...props} />;
    case "reviews":
      return <ReviewsSegment {...props} />;
    default:
      throw new Error(`[Invalid variant] Experiences`);
  }
};
