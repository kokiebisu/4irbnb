import { Layout } from '@layout';
import { useAmenitiesBecomeAHost } from './logic';
import { AmenitiesSegmentTemplate } from './template';

export const AmenitiesSegment: React.FC<{}> = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    ...data
  } = useAmenitiesBecomeAHost();

  return (
    <Layout
      variant="create"
      left={<AmenitiesSegmentTemplate {...data} />}
      percentage={25}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
    />
  );
};
