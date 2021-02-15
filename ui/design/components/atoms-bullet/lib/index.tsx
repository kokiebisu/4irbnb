/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { AmenityBullet } from "./web/bullet.amenity";
import { BringBullet } from "./web/bullet.bring";
import { CharacteristicBullet } from "./web/bullet.characteristics";
import { CheckBullet } from "./web/bullet.check";
import { ExperienceBullet } from "./web/bullet.experience";
import { HelpBullet } from "./web/bullet.help";
import { HostBullet } from "./web/bullet.host";
import { KnowBullet } from "./web/bullet.know";
import { OnlineHostBullet } from "./web/bullet.onlinehost";
import { PriorityBullet } from "./web/bullet.priority";
import { QuestionBullet } from "./web/bullet.question";
import { RatingBullet } from "./web/bullet.rating";
import { RequiredBullet } from "./web/bullet.required";
import { ScoreBullet } from "./web/bullet.score";
import { ScenarioBullet } from "./web/bullet.scenario";

export const $Bullet = {
  CHARACTERISTIC: "characteristic",
  AMENITY: "amenity",
  SCORE: "score",
  HOST: "host",
  KNOW: "know",
  RATING: "rating",
  BRING: "bring",
  EXPERIENCE: "experience",
  PRIORITY: "priority",
  HELP: "help",
  REQUIRED: "required",
  ONLINEHOST: "onlinehost",
  QUESTION: "question",
  CHECK: "check",
  SCENARIO: "scenario",
};

export interface BulletProps {
  extendsTo?: any;
  variant: string;
  [property: string]: any;
}

/**
 * Bundles the bullet components
 * @param {string} extendsTo - Adds custom styyling to the bullet component
 * @param {string} variant - Specify the variant of the bullet
 */
export const Bullet: React.FC<BulletProps> = ({
  extendsTo,
  variant,
  ...props
}) => {
  const variants: {
    [property: string]: JSX.Element;
  } = {
    [$Bullet.CHARACTERISTIC]: <CharacteristicBullet {...props} />,
    [$Bullet.AMENITY]: <AmenityBullet {...props} />,
    [$Bullet.SCORE]: <ScoreBullet {...props} />,
    [$Bullet.HOST]: <HostBullet {...props} />,
    [$Bullet.KNOW]: <KnowBullet {...props} />,
    [$Bullet.RATING]: <RatingBullet {...props} />,
    [$Bullet.BRING]: <BringBullet {...props} />,
    [$Bullet.EXPERIENCE]: <ExperienceBullet {...props} />,
    [$Bullet.PRIORITY]: <PriorityBullet {...props} />,
    [$Bullet.HELP]: <HelpBullet {...props} />,
    [$Bullet.REQUIRED]: <RequiredBullet {...props} />,
    [$Bullet.ONLINEHOST]: <OnlineHostBullet {...props} />,
    [$Bullet.QUESTION]: <QuestionBullet {...props} />,
    [$Bullet.CHECK]: <CheckBullet {...props} />,
    [$Bullet.SCENARIO]: <ScenarioBullet {...props} />,
  };

  return (
    <div data-testid={`${variant}-bullet--atom`} className={extendsTo}>
      {variants[variant]}
    </div>
  );
};
