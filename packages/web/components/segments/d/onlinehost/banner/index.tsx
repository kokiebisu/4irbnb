import React from "react";
import { useBannerSegment } from "./logic";
import { BannerSegmentTemplate, BannerSegmentTemplateProps } from "./template";

export type BannerSegmentProps = BannerSegmentTemplateProps;

export const BannerSegment = () => {
  const data = useBannerSegment();
  return <BannerSegmentTemplate {...data} />;
};
