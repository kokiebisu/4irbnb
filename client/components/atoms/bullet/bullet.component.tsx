import React from "react";

/** components */
import { AmenityBullet } from "./bullet.amenity";
import { BringBullet } from "./bullet.bring";
import { CharacteristicBullet } from "./bullet.characteristics";
import { CheckBullet } from "./bullet.check";
import { ExperienceBullet } from "./bullet.experience";
import { HelpBullet } from "./bullet.help";
import { HostBullet } from "./bullet.host";
import { KnowBullet } from "./bullet.know";
import { OnlineHostBullet } from "./bullet.onlinehost";
import { PriorityBullet } from "./bullet.priority";
import { QuestionBullet } from "./bullet.question";
import { RatingBullet } from "./bullet.rating";
import { RequiredBullet } from "./bullet.required";
import { ScoreBullet } from "./bullet.score";

export interface BulletProps {
  extendsTo?: string;
  variant: string;
  [x: string]: any;
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
    characteristic: <CharacteristicBullet {...props} />,
    amenity: <AmenityBullet {...props} />,
    score: <ScoreBullet {...props} />,
    host: <HostBullet {...props} />,
    know: <KnowBullet {...props} />,
    rating: <RatingBullet {...props} />,
    bring: <BringBullet {...props} />,
    experience: <ExperienceBullet {...props} />,
    priority: <PriorityBullet {...props} />,
    help: <HelpBullet {...props} />,
    required: <RequiredBullet {...props} />,
    onlinehost: <OnlineHostBullet {...props} />,
    question: <QuestionBullet {...props} />,
    check: <CheckBullet {...props} />,
  };

  return (
    <div data-testid={`${variant}-bullet`} className={extendsTo}>
      {variants[variant]}
    </div>
  );
};
