import { BulletProps } from "..";
import { PrimaryBullet } from "../bullet-primary";
import { QuaternaryBullet } from "../bullet-quaternary";
import { QuestionBullet } from "../bullet-question";
import { RatingBullet } from "../bullet-rating";
import { RequiredBullet } from "../bullet-required";
import { ScoreBullet } from "../bullet-score";
import { SecondaryBullet } from "../bullet-secondary";

export const factory = (props: BulletProps): JSX.Element => {
  switch (props.variant) {
    case "question":
      return <QuestionBullet {...props} />;
    case "rating":
      return <RatingBullet {...props} />;
    case "required":
      return <RequiredBullet {...props} />;
    case "score":
      return <ScoreBullet {...props} />;
    case "primary":
      return <PrimaryBullet {...props} />;
    case "secondary":
      return <SecondaryBullet {...props} />;
    case "quaternary":
      return <QuaternaryBullet {...props} />;
    default:
      throw new Error(`[Bullet] Variant does not exist`);
  }
};
