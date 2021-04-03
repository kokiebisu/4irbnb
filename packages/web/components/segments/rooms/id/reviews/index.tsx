import { ReviewsTemplate } from './template';
import { useReviews } from './logic';

export const Reviews = () => {
  const data = useReviews();
  return <ReviewsTemplate {...data} />;
};
