import React from 'react';

import { CharacteristicBullet } from './bullet.characteristics';
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
  };

  return <div>{types[type]}</div>;
};
