import { Icon } from '@icons';

export interface ExperienceBulletProps {
  experienceType?: 'hosts' | 'activities' | 'global';
}

/**
 * Renders the experience bullet
 * @param {string} experience - Type of experience bullet
 */
export const ExperienceBullet: React.FC<ExperienceBulletProps> = ({
  experienceType,
}) => {
  const experiences = {
    hosts: {
      icon: (
        <Icon
          variant="experience"
          experienceType="smile"
          width={36}
          height={36}
        />
      ),
      title: 'Thoughtful hosts',
      description:
        'Get to know hosts who share their expertise and a window to their world.',
    },
    activities: {
      icon: (
        <Icon
          variant="experience"
          experienceType="people"
          width={36}
          height={36}
        />
      ),
      title: 'Small group activities',
      description:
        'Meet people from all over the world while learning something new together.',
    },
    global: {
      icon: (
        <Icon
          variant="experience"
          experienceType="computer"
          width={36}
          height={36}
        />
      ),
      title: 'Simple and global',
      description:
        'Join easily and participate from home without a lot of prep.',
    },
  };

  return (
    <div className="flex itesm-center">
      <div className="mr-4">{experiences[experienceType].icon}</div>
      <div>
        <div>
          <h3 className="text-base">{experiences[experienceType].title}</h3>
        </div>
        <div>
          <p className="text-sm">{experiences[experienceType].description}</p>
        </div>
      </div>
    </div>
  );
};

export const experience = (props) => {
  return {
    experience: {
      component: <ExperienceBullet {...props} />,
    },
  };
};