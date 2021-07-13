import { useReviewCard } from "./logic";
import { ReviewCardTemplate, ReviewCardTemplateProps } from "./template";

export type ReviewCardProps = ReviewCardTemplateProps;

export const ReviewCard = (props: ReviewCardProps): JSX.Element => {
  const data = useReviewCard();
  return <ReviewCardTemplate {...props} {...data} />;
};
