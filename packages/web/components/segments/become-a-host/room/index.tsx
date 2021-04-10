import { Layout } from '@layout';
import React from 'react';
import { useRoomSegment } from './logic';
import { RoomSegmentTemplate } from './template';

export const RoomSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    canProceedToNextPage,
    ...data
  } = useRoomSegment();
  return (
    <Layout
      variant="create"
      left={<RoomSegmentTemplate {...data} />}
      percentage={5}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
      criteria={canProceedToNextPage}
    />
  );
};
