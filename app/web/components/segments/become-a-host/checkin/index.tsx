import { Layout } from '@layout';
import { useCheckInSegment } from './logic';
import { CheckInSegmentTemplate } from './template';

export const CheckInSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    ...data
  } = useCheckInSegment();
  return (
    <Layout
      variant="create"
      title="Calendar and availability"
      left={<CheckInSegmentTemplate {...data} />}
      percentage={80}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
    />
  );
};
