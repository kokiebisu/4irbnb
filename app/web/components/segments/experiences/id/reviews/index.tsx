import { useReviewsSegment } from "./logic";
import { ReviewsSegmentTemplate } from "./template";

export const ReviewsSegment = () => {
  const data = useReviewsSegment();
  return <ReviewsSegmentTemplate {...data} />;
};
