import { Layout } from '@layout';
import { useLocationSegment } from './logic';
import { LocationSegmentTemplate } from './template';

export const LocationSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    canProceedToNextPage,
    ...data
  } = useLocationSegment();
  return (
    <Layout
      variant="create"
      left={<LocationSegmentTemplate {...data} />}
      percentage={20}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
      criteria={canProceedToNextPage}
    />
  );
};

export const location = (props) => {
  return {
    location: {
      component: <LocationSegment {...props} />,
    },
  };
};
