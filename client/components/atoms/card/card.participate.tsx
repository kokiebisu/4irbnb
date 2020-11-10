import React from 'react';
import { ParticipateCardProps } from './props';
import space from '../../../styles/space.module.scss';
import { Computer, People } from '../../../public/svg/original';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';

export const ParticipateCard: React.FC<ParticipateCardProps> = ({
  categoryType = 'call',
}) => {
  const types = {
    call: {
      icon: <Computer width={32} />,
      title: 'Join a video call',
      description:
        'Download Zoom for free on a desktop or mobile device. After you book, you’ll receive an email with a link and details on how to join.',
      more: 'Show more',
    },
    private: {
      icon: <People width={32} />,
      title: 'Book a private group',
      description:
        'Cici can host private groups of any size, up to 100 guests. Private group rates start at $340.',
    },
  };
  return (
    <div
      style={{ width: 210, minHeight: 300, height: '100%' }}
      className={[space['p--16'], color['b--white__2'], shape['br--6']].join(
        ' '
      )}>
      <div className={[space['m-v--12']].join(' ')}>
        {types[categoryType].icon}
      </div>
      <div className={[space['m-b--12']].join(' ')}>
        <h3 className={[font['size--16']].join(' ')}>
          {types[categoryType].title}
        </h3>
      </div>
      <div className={[space['m-b--12']].join(' ')}>
        <p className={[font['size--14']].join(' ')}>
          {types[categoryType].description}
        </p>
      </div>
      {types[categoryType].more && (
        <div>
          <h3 className={[font['size--16']].join(' ')}>
            <u>Show more</u>
          </h3>
        </div>
      )}
    </div>
  );
};
