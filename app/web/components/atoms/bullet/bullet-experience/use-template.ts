import { ExperienceBulletVariants } from './template';

export const useExperienceBulletTemplate: ({
  experienceType,
}: {
  experienceType: ExperienceBulletVariants;
}) => {
  icon: {
    variant: 'experience';
    experienceType: 'smile' | 'people' | 'computer';
  };
  title: string;
  description: string;
} = ({ experienceType }) => {
  const experiences = {
    hosts: {
      icon: {
        variant: 'experience' as const,
        experienceType: 'smile' as const,
      },
      title: 'Thoughtful hosts',
      description:
        'Get to know hosts who share their expertise and a window to their world.',
    },
    activities: {
      icon: {
        variant: 'experience' as const,
        experienceType: 'people' as const,
      },
      title: 'Small group activities',
      description:
        'Meet people from all over the world while learning something new together.',
    },
    global: {
      icon: {
        variant: 'experience' as const,
        experienceType: 'computer' as const,
      },
      title: 'Simple and global',
      description:
        'Join easily and participate from home without a lot of prep.',
    },
  };

  return { ...experiences[experienceType] } as {
    icon: {
      variant: 'experience';
      experienceType: 'smile' | 'people' | 'computer';
    };
    title: string;
    description: string;
  };
};
