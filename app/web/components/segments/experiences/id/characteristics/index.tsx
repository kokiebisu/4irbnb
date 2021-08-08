import React from "react";
import { useCharacteristicsSegment } from "./logic";
import { CharacteristicsSegmentTemplate } from "./template";

export const CharacteristicsSegment = () => {
  const data = useCharacteristicsSegment();
  return <CharacteristicsSegmentTemplate {...data} />;
};
