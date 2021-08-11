import { Layout } from '@layout';
import React from 'react';
import { usePriceSegment } from './logic';
import { PriceSegmentTemplate } from './template';

export const PriceSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    ...data
  } = usePriceSegment();
  return (
    <Layout
      variant="create"
      title="Pricing"
      left={<PriceSegmentTemplate {...data} />}
      percentage={90}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
    />
  );
};
