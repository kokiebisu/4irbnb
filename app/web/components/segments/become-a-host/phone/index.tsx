import { Layout } from '@layout';
import { usePhoneSegment } from './logic';
import { PhoneSegmentTemplate } from './template';

export const PhoneSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    canProceedToNextPage,
    ...data
  } = usePhoneSegment();
  return (
    <Layout
      variant="create"
      left={<PhoneSegmentTemplate {...data} />}
      percentage={80}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
      criteria={canProceedToNextPage}
    />
  );
};
