import { useReviewCard } from './logic';
import { ReviewCardTemplate } from './template';

const ReviewCard = (props) => {
  const data = useReviewCard();
  return <ReviewCardTemplate {...props} {...data}/>;
};

export const review = (props) => {
  return {
    review: {
      component: <ReviewCard {...props} />,
    },
  };
};
