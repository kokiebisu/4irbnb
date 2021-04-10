import { Layout } from '@layout';
import { useAdvanceBecomeAHost } from './logic';
import { AdvanceSegmentTemplate } from './template';

export const AdvanceSegment: React.FC<{}> = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    ...data
  } = useAdvanceBecomeAHost();
  return (
    <Layout
      variant="create"
      title="Calendar and availability"
      left={<AdvanceSegmentTemplate {...data} />}
      percentage={85}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
    />
  );
};
