import React from "react";
import { categories } from "./content";
import { DiscoverSegmentTemplate } from "./template";

export const DiscoverSegment = (): JSX.Element => {
  return (
    <div data-testid="discover-segment">
      <DiscoverSegmentTemplate items={categories} />
    </div>
  );
};
