import React from 'react';
import { AmenityBullet } from './bullet.amenity';
import { CharacteristicBullet } from './bullet.characteristics';
import { HostBullet } from './bullet.host';
import { KnowBullet } from './bullet.know';
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
  };

  return (
    <div data-testid='bullet' className={extendsTo}>
      {types[type]}
    </div>
  );
};
