/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  Activities,
  Computer,
  Host,
} from '@nextbnb/design/assets/svg/original';
import { $BULLET } from '..';

/**
 * Renders the experience bullet
 * @param {string} experience - Type of experience bullet
 */
const ExperienceBullet: React.FC<{
  experience?: 'hosts' | 'activities' | 'global';
}> = ({ experience = 'hosts' }) => {
  const experiences: {
    [type: string]: { icon: JSX.Element; title: string; description: string };
  } = {
    hosts: {
      icon: <Host width={36} />,
      title: 'Thoughtful hosts',
      description:
        'Get to know hosts who share their expertise and a window to their world.',
    },
    activities: {
      icon: <Activities width={36} />,
      title: 'Small group activities',
      description:
        'Meet people from all over the world while learning something new together.',
    },
    global: {
      icon: <Computer width={36} />,
      title: 'Simple and global',
      description:
        'Join easily and participate from home without a lot of prep.',
    },
  };

  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ marginRight: 16 }}>{experiences[experience].icon}</div>
      <div>
        <div>
          <h3 css={{ fontSize: 16 }}>{experiences[experience].title}</h3>
        </div>
        <div>
          <p css={{ fontSize: 14 }}>{experiences[experience].description}</p>
        </div>
      </div>
    </div>
  );
};

export const experience = (props) => {
  return {
    [$BULLET.experience]: {
      component: <ExperienceBullet {...props} />,
      css: {},
    },
  };
};
