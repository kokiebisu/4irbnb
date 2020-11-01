import React from 'react';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import {
  Calendar,
  Door,
  Guidelines,
  House,
  Sparkle,
} from '../../../public/svg/original';
import { CharacteristicBulletProps } from './props';

export const CharacteristicBullet: React.FC<CharacteristicBulletProps> = ({
  characteristicType = 'house',
}) => {
  const icons = {
    house: {
      icon: <House width={24} />,
      title: 'Entire home',
      description: 'You’ll have the farm stay to yourself.',
    },
    sparkle: {
      icon: <Sparkle width={24} />,
      title: 'Enhanced Clean',
      description:
        "This host committed to Airbnb's 5-step enhanced cleaning process.",
    },
    door: {
      icon: <Door width={24} />,
      title: 'Self check-in',
      description: 'You can check in with the doorman.',
    },
    calendar: {
      icon: <Calendar width={24} />,
      title: 'Cancellation policy',
      description:
        'Add your trip dates to get the cancellation details for this stay.',
    },
    guidelines: {
      icon: <Guidelines width={24} />,
      title: 'House rules',
      description: 'The host doesn’t allow pets, parties, or smoking.',
    },
  };

  return (
    <div className={[layout['flex'], space['m-v--8']].join(' ')}>
      <div className={[space['p-t--10'], space['m-r--8']].join(' ')}>
        {icons[characteristicType].icon}
      </div>
      <div>
        <h3 className={[color['c--gray__2']].join(' ')}>
          {icons[characteristicType].title}
        </h3>
        <p className={[color['c--gray__3'], font['weight--300']].join(' ')}>
          {icons[characteristicType].description}
        </p>
      </div>
    </div>
  );
};
