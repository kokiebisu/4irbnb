import React from 'react';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import animation from '../../../styles/animation.module.scss';
import styles from '../../../styles/index.module.scss';
import { DoubleBed } from 'public/svg/original';
import { ArrangementsCardProps } from './props';

export const ArrangementsCard: React.FC<ArrangementsCardProps> = ({
  arrangement = { type: 'bedroom', beds: [{ type: 'double bed', count: 1 }] },
}) => {
  const types = {
    'double bed': <DoubleBed width={14} />,
  };
  return (
    <div className='w-48 p-2 pl-6'>
      <div className='pt-2 pb-4'>{types[arrangement.type]}</div>
      <p style={{ fontFamily: 'airbnb-medium' }} className='text-gray-750 pt-2'>
        Bedroom
      </p>
      <div>
        {arrangement.beds.map((bed) => {
          return (
            <p className='text-gray-750'>
              {bed.count} {bed.type}
            </p>
          );
        })}
      </div>
    </div>
  );
};
