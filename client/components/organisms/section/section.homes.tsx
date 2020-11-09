import { Button } from '../../../components/atoms/button/button.component';
import React from 'react';

import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';

import { HomesSectionProps } from './props';
import { Card } from '../../../components/atoms/card/card.component';

export const HomesSection: React.FC<HomesSectionProps> = () => {
  const filters = [
    { name: 'Cacellation flexibility' },
    { name: 'Type of place' },
    { name: 'Price' },
    { name: 'Instant Book' },
    { name: 'More filters' },
  ];
  return (
    <div className={[space['m-t--24']].join(' ')}>
      <div>
        <p className={[font['size--14']].join(' ')}>300+ stays</p>
      </div>
      <div>
        <h3 className={[font['size--32']].join(' ')}>Stays in Sechelt</h3>
      </div>
      <div className={[layout['flex'], space['m-v--22']].join(' ')}>
        {filters.map((filter, index) => {
          return (
            <div key={index} className={[space['m-r--8']].join(' ')}>
              <Button type='filter' name={filter.name} />
            </div>
          );
        })}
      </div>
      <div className={[space['m-b--16']].join(' ')}>
        <p className={[color['c--gray__1'], font['size--14']].join(' ')}>
          Enter dates and number of guests to see the total price per night.
        </p>
      </div>
      <div>
        <Card extendsTo={[color['b-t--white__2']].join(' ')} type='stay' />
      </div>
      <div>
        <Card extendsTo={[color['b-t--white__2']].join(' ')} type='stay' />
      </div>
      <div>
        <Card extendsTo={[color['b-t--white__2']].join(' ')} type='stay' />
      </div>
      <div>
        <Card extendsTo={[color['b-t--white__2']].join(' ')} type='stay' />
      </div>
      <div>
        <Card extendsTo={[color['b-t--white__2']].join(' ')} type='stay' />
      </div>
      <div>
        <Card extendsTo={[color['b-t--white__2']].join(' ')} type='stay' />
      </div>
      <div>
        <Card extendsTo={[color['b-t--white__2']].join(' ')} type='stay' />
      </div>
      <div>
        <Card extendsTo={[color['b-t--white__2']].join(' ')} type='stay' />
      </div>
      <div>
        <Card extendsTo={[color['b-t--white__2']].join(' ')} type='stay' />
      </div>
      <div>
        <Card extendsTo={[color['b-t--white__2']].join(' ')} type='stay' />
      </div>
    </div>
  );
};
