import { useReviewsSegment } from './logic';
import {
  ReviewsSegmentTemplate,
  ReviewsSegmentTemplateProps,
} from './template';

export interface ReviewsSegmentProps extends ReviewsSegmentTemplateProps {}

export const ReviewsSegment: React.FC<ReviewsSegmentProps> = () => {
  const data = useReviewsSegment();
  return <ReviewsSegmentTemplate {...data} />;
};

export const reviews = (props: ReviewsSegmentProps) => {
  return {
    reviews: {
      component: <ReviewsSegment {...props} />,
    },
  };
};
