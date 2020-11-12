import React from 'react';
import { AmenityBullet } from './bullet.amenity';
import { BringBullet } from './bullet.bring';
import { CharacteristicBullet } from './bullet.characteristics';
import { ExperienceBullet } from './bullet.experience';
import { HostBullet } from './bullet.host';
import { KnowBullet } from './bullet.know';
import { PriorityBullet } from './bullet.priority';
import { RatingBullet } from './bullet.rating';
import { ScoreBullet } from './bullet.score';
import { BulletProps } from './props';

interface mapProps {
  [key: string]: JSX.Element;
}

export const Bullet: React.FC<BulletProps> = ({
  extendsTo,
  type,
  ...props
}) => {
  const types: mapProps = {
    characteristic: <CharacteristicBullet {...props} />,
    amenity: <AmenityBullet {...props} />,
    score: <ScoreBullet {...props} />,
    host: <HostBullet {...props} />,
    know: <KnowBullet {...props} />,
    rating: <RatingBullet {...props} />,
    bring: <BringBullet {...props} />,
    experience: <ExperienceBullet {...props} />,
    priority: <PriorityBullet {...props} />,
  };

  return (
    <div data-testid='bullet' className={extendsTo}>
      {types[type]}
    </div>
  );
};
