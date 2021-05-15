import { Layout } from '@layout';
import React from 'react';
import { useRequirementsSegment } from './logic';
import { RequirementsSegmentTemplate } from './template';

export const RequirementsSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    ...data
  } = useRequirementsSegment();
  return (
    <Layout
      variant="create"
      left={<RequirementsSegmentTemplate {...data} />}
      percentage={80}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
    />
  );
};

export const requirements = (props) => {
  return {
    requirements: {
      component: <RequirementsSegment {...props} />,
    },
  };
};
