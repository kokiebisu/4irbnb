import { OnlineHostSegmentProps } from "..";
import { BackSegment } from "../back";
import { BannerSegment } from "../banner";
import { FAQSegment } from "../faq";
import { MoreSegment } from "../more";
import { SharingSegment } from "../sharing";

export const factory = (props: OnlineHostSegmentProps) => {
  switch (props.variant) {
    case "back":
      return <BackSegment />;
    case "banner":
      return <BannerSegment />;
    case "faq":
      return <FAQSegment />;
    case "more":
      return <MoreSegment />;
    case "sharing":
      return <SharingSegment />;
    default:
      throw new Error("[Invalid OnlinehostSegment]");
  }
};
