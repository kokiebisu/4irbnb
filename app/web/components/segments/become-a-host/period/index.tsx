import { Layout } from '@layout';
import { usePeriodSegment } from './logic';
import { PeriodSegmentTemplate } from './template';

export const PeriodSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    canProceedToNextPage,
    ...data
  } = usePeriodSegment();
  return (
    <Layout
      variant="create"
      title="Calendar and availability"
      left={<PeriodSegmentTemplate {...data} />}
      percentage={90}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
      criteria={canProceedToNextPage}
    />
  );
};
