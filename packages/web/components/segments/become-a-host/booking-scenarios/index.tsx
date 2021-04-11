import { Layout } from '@layout';
import { useBookingScenariosSegment } from './logic';
import { BookingScenariosSegmentTemplate } from './template';

export const BookingScenariosSegment = () => {
  const {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    ...data
  } = useBookingScenariosSegment();

  return (
    <Layout
      variant="create"
      title="Review"
      left={<BookingScenariosSegmentTemplate {...data} />}
      percentage={95}
      next={handleRedirectToNextPage}
      back={handleRedirectToPreviousPage}
    />
  );
};
