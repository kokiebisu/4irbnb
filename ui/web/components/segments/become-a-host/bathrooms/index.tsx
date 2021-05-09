import { Layout } from '@layout';
import { useBathroomsSegment } from './logic';
import { BathroomsSegmentTemplate } from './template';

export const BathroomsSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    ...data
  } = useBathroomsSegment();
  return (
    <Layout
      variant="create"
      left={<BathroomsSegmentTemplate {...data} />}
      percentage={15}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
    />
  );
};

export const bathrooms = (props) => {
  return {
    bathrooms: {
      component: <BathroomsSegment {...props} />,
    },
  };
};
