import { OnlineHostSegmentProps } from "..";
import { BackSegment } from "../back";
import { BannerSegment } from "../banner";
import { FAQSegment } from "../faq";
import { MoreSegment } from "../more";
import { SharingSegment } from "../sharing";

export const factory = (props: OnlineHostSegmentProps) => {
  switch (props.variant) {
    case "back":
      return <BackSegment {...props} />;
    case "banner":
      return <BannerSegment {...props} />;
    case "faq":
      return <FAQSegment {...props} />;
    case "more":
      return <MoreSegment {...props} />;
    case "sharing":
      return <SharingSegment {...props} />;
    default:
      throw new Error("[Invalid OnlinehostSegment]");
  }
};
