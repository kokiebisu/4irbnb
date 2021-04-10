import { Layout } from '@layout';
import { useAdvanceBecomeAHost } from './logic';
import { AdvanceBecomeAHostTemplate } from './template';

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
      left={<AdvanceBecomeAHostTemplate {...data} />}
      percentage={85}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
    />
  );
};
