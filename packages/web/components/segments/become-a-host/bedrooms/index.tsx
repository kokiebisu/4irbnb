import { Layout } from '@layout';
import { useBedroomsSegment } from './logic';
import { BedroomsSegmentTemplate } from './template';

export const BedroomsSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    ...data
  } = useBedroomsSegment();
  return (
    <Layout
      variant="create"
      left={<BedroomsSegmentTemplate {...data} />}
      percentage={10}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
    />
  );
};
