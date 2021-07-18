import { StartingSegment } from "../starting";
import { CardsSegment } from "../cards";
import { BannerSegment } from "../banner";
import { CollectionsSegment } from "../collections";
import React from "react";
import { SegmentProps } from "..";

export const factory = (props: SegmentProps) => {
  switch (props.variant) {
    case "banner":
      return <BannerSegment {...props} />;
    case "collections":
      return <CollectionsSegment />;
    case "cards":
      return <CardsSegment />;
    case "starting":
      return <StartingSegment />;
    default:
      throw new Error("[s/experiences/online segment] Error");
  }
};
