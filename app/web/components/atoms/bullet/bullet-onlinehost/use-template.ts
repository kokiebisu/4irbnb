import { GeneralTypeVariants } from 'components/icons/general/template';
import { OnlinehostTypeVariants } from './template';

export const useOnlinehostBulletTemplate = ({
  onlinehostType,
}: {
  onlinehostType: OnlinehostTypeVariants;
}) => {
  const onlinehostTypes = {
    home: {
      icon: { type: 'component', variant: 'general', generalType: 'home' },
      title: 'Host from home',
      description: 'Share your expertise and a window to your world',
    },
    global: {
      icon: { type: 'component', variant: 'general', generalType: 'general' },
      title: 'Meet global guests',
      description: 'Make the world feel a little smaller and a lot friendlier.',
    },
    business: {
      icon: {
        type: 'component',
        variant: 'general',
        generalType: 'lightening',
      },
      title: 'Build a business',
      description:
        'Earn money doing something you love with support from Airbnb.',
    },
    resources: {
      icon: {
        type: 'img',
        width: 40,
        src:
          'https://a0.muscache.com/pictures/6fccb4f8-e134-40a9-9863-b0d42923db62.jpg',
      },
      title: 'Resources',
      description:
        'Guidelines, tips, and tricks for hosting successful online experiences.',
    },
    events: {
      icon: {
        type: 'img',
        width: 40,
        src:
          'https://a0.muscache.com/pictures/11f05488-4ea5-4b54-a1a2-755c006e803f.jpg',
      },
      title: 'Online events',
      description: 'Learn to master the art of hosting, online and otherwise.',
    },
    community: {
      icon: {
        type: 'img',
        width: 40,
        src:
          'https://a0.muscache.com/pictures/639bef93-4cc4-4676-9d83-705093a3d2e6.jpg',
      },
      title: 'Community support',
      description:
        'Connect with other hosts through Facebook groups and meetups.',
    },
  };

  return { ...onlinehostTypes[onlinehostType] } as {
    icon:
      | {
          type: 'img';
          width: number;
          src: string;
        }
      | {
          type: 'component';
          width: number;
          height: number;
          variant: 'general';
          generalType: GeneralTypeVariants;
        };
    title: string;
    description: string;
  };
};
