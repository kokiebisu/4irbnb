import { PrimaryBulletProps } from "./bullet-primary";
import { QuaternaryBulletProps } from "./bullet-quaternary";
import { QuestionBulletProps } from "./bullet-question";
import { RatingBulletProps } from "./bullet-rating";
import { RequiredBulletProps } from "./bullet-required";
import { ScoreBulletProps } from "./bullet-score";
import { SecondaryBulletProps } from "./bullet-secondary";
import { factory } from "./utils/factory";

export type BulletProps =
  | ({ variant: "score" } & ScoreBulletProps)
  | ({ variant: "rating" } & RatingBulletProps)
  | ({ variant: "required" } & RequiredBulletProps)
  | ({ variant: "question" } & QuestionBulletProps)
  | ({ variant: "primary" } & PrimaryBulletProps)
  | ({ variant: "secondary" } & SecondaryBulletProps)
  | ({ variant: "quaternary" } & QuaternaryBulletProps);

/**
 * Bundles the bullet components
 * @param {string} variant - Specify the variant of the bullet
 */
export const Bullet = (props: BulletProps): JSX.Element => factory(props);
