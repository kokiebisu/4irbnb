import { ReviewsSegmentTemplate } from "./template";
import { useReviewsSegment } from "./logic";

export const ReviewsSegment = () => {
  const data = useReviewsSegment();
  return <ReviewsSegmentTemplate {...data} />;
};
