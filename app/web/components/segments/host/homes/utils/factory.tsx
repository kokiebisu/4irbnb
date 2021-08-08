import React from "react";
import { HomesSegmentProps } from "..";
import { AllSegment } from "../all";
import { BannerSegment } from "../banner";
import { CommunitySegment } from "../community";
import { HelpSegment } from "../help";
import { HostingSegment } from "../hosting";
import { PrioritySegment } from "../priority";
import { ReadySegment } from "../ready";

export const factory = (props: HomesSegmentProps) => {
  switch (props.variant) {
    case "all":
      return <AllSegment />;
    case "banner":
      return <BannerSegment />;
    case "community":
      return <CommunitySegment />;
    case "help":
      return <HelpSegment />;
    case "hosting":
      return <HostingSegment />;
    case "priority":
      return <PrioritySegment />;
    case "ready":
      return <ReadySegment />;
    default:
      throw new Error(`[Invalid variant]: Host Segment`);
  }
};
