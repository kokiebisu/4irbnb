/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Global, Home, Lightening } from '@nextbnb/design/assets/svg/original';
import { $BULLET } from '..';

const types: {
  [type: string]: { icon: JSX.Element; title: string; description: string };
} = {
  home: {
    icon: <Home />,
    title: 'Host from home',
    description: 'Share your expertise and a window to your world',
  },
  global: {
    icon: <Global />,
    title: 'Meet global guests',
    description: 'Make the world feel a little smaller and a lot friendlier.',
  },
  business: {
    icon: <Lightening />,
    title: 'Build a business',
    description:
      'Earn money doing something you love with support from Airbnb.',
  },
  resources: {
    icon: (
      <img
        style={{ width: 40 }}
        src="https://a0.muscache.com/pictures/6fccb4f8-e134-40a9-9863-b0d42923db62.jpg"
      />
    ),
    title: 'Resources',
    description:
      'Guidelines, tips, and tricks for hosting successful online experiences.',
  },
  events: {
    icon: (
      <img
        style={{ width: 40 }}
        src="https://a0.muscache.com/pictures/11f05488-4ea5-4b54-a1a2-755c006e803f.jpg"
      />
    ),
    title: 'Online events',
    description: 'Learn to master the art of hosting, online and otherwise.',
  },
  community: {
    icon: (
      <img
        style={{ width: 40 }}
        src="https://a0.muscache.com/pictures/639bef93-4cc4-4676-9d83-705093a3d2e6.jpg"
      />
    ),
    title: 'Community support',
    description:
      'Connect with other hosts through Facebook groups and meetups.',
  },
};

export const OnlineHostBullet: React.FC<{
  type?: string;
}> = ({ type = 'home' }) => {
  return (
    <div>
      <div>{types[type].icon}</div>
      <div css={{ margin: '16px 0' }}>
        <h3>{types[type].title}</h3>
      </div>
      <div css={{ fontSize: 14 }}>
        <p>{types[type].description}</p>
      </div>
    </div>
  );
};

export const onlinehost = (props) => {
  return {
    [$BULLET.onlinehost]: {
      component: <OnlineHostBullet {...props} />,
      css: {},
    },
  };
};
