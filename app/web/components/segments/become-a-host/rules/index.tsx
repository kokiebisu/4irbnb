import { Layout } from '@layout';
import { useRulesSegment } from './logic';
import { RulesSegmentTemplate } from './template';

export const RulesSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    canProceedToNextPage,
    ...data
  } = useRulesSegment();
  return (
    <Layout
      variant="create"
      left={<RulesSegmentTemplate {...data} />}
      percentage={70}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
      criteria={canProceedToNextPage}
    />
  );
};
