import { Icon } from '@icons';

export interface OnlineHostBulletProps {
  onlinehostType?:
    | 'home'
    | 'global'
    | 'business'
    | 'resources'
    | 'events'
    | 'community';
}

export const OnlineHostBullet: React.FC<OnlineHostBulletProps> = ({
  onlinehostType,
}) => {
  const types = {
    home: {
      icon: <Icon variant="general" generalType="home" />,
      title: 'Host from home',
      description: 'Share your expertise and a window to your world',
    },
    global: {
      icon: <Icon variant="general" generalType="global" />,
      title: 'Meet global guests',
      description: 'Make the world feel a little smaller and a lot friendlier.',
    },
    business: {
      icon: <Icon variant="general" generalType="lightening" />,
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
  return (
    <div>
      <div>{types[onlinehostType].icon}</div>
      <div className="my-4">
        <h3>{types[onlinehostType].title}</h3>
      </div>
      <div className="text-sm">
        <p>{types[onlinehostType].description}</p>
      </div>
    </div>
  );
};

export const onlinehost = (props) => {
  return {
    onlinehost: { component: <OnlineHostBullet {...props} /> },
  };
};
