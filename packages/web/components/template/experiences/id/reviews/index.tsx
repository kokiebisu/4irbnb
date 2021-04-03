import { useReviews } from './logic';
import { ReviewsTemplate } from './template';

export const Reviews = () => {
  const data = useReviews();
  return <ReviewsTemplate {...data} />;
};
