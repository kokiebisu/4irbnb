import {
  Analytics,
  CustomerService,
  Education,
  ToolBox,
} from '../../../public/svg/original';
import React from 'react';
import layout from '../../../styles/layout.module.scss';
import { HelpBulletProps } from './props';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';

export const HelpBullet: React.FC<HelpBulletProps> = ({ help = 'support' }) => {
  const helps = {
    support: {
      icon: <CustomerService width={28} />,
      title: '24/7 customer support',
      description:
        'From setting up your listing to concerns about guests, our global team is here to support you by phone, email, and chat, every step of the way.',
    },
    tools: {
      icon: <ToolBox width={28} />,
      title: 'Tools to help you succeed',
      description:
        'Our tools make it easy to set the right prices, manage reservations, message with guests, receive payments, track earnings, and more.',
    },
    insights: {
      icon: <Analytics width={28} />,
      title: 'Personalized insights',
      description:
        "We'll share local travel trends and suggest ways to improve to help you earn great reviews and grow your business.",
    },
    education: {
      icon: <Education width={28} />,
      title: 'Education and training',
      description:
        'Find guidance in the Resource Centre, join a free webinar on hosting basics, and connect with other hosts in our Community Centre.',
    },
  };
  return (
    <div className={[layout['flex']].join(' ')}>
      <div className={[space['m-r--16']].join(' ')}>{helps[help].icon}</div>
      <div>
        <div className={[space['m-b--6']].join(' ')}>
          <h3>{helps[help].title}</h3>
        </div>
        <div>
          <h4 className={[font['size--16'], font['lh--15']].join(' ')}>
            {helps[help].description}
          </h4>
        </div>
      </div>
    </div>
  );
};
