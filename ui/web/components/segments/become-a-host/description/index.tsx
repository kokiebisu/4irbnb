import { Layout } from '@layout';
import { useDescriptionSegment } from './logic';
import { DescriptionSegmentTemplate } from './template';

export const DescriptionSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    ...data
  } = useDescriptionSegment();
  const { description } = data;
  return (
    <Layout
      variant="create"
      left={<DescriptionSegmentTemplate {...data} />}
      percentage={60}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
      criteria={description.length === 0 || description.length >= 500}
    />
  );
};

export const description = (props) => {
  return {
    description: {
      component: <DescriptionSegment {...props} />,
    },
  };
};
