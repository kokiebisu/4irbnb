import { SegmentProps } from "..";
import { AlsoSegment } from "../also";
import { HomesSegment } from "../homes";

export const factory = (props: SegmentProps) => {
  switch (props.variant) {
    case "also":
      return <AlsoSegment />;
    case "homes":
      return <HomesSegment />;
    default:
      throw new Error(`[Invalid variant]: s/homes`);
  }
};
