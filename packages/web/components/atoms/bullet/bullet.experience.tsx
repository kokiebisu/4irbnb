import { Activities, Computer, Host } from '@svg/original';

/**
 * Renders the experience bullet
 * @param {string} experience - Type of experience bullet
 */
export const ExperienceBullet: React.FC<{
  experience?: 'hosts' | 'activities' | 'global';
}> = ({ experience = 'hosts' }) => {
  const experiences = {
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
    <div className="flex itesm-center">
      <div className="mr-4">{experiences[experience].icon}</div>
      <div>
        <div>
          <h3 className="text-base">{experiences[experience].title}</h3>
        </div>
        <div>
          <p className="text-sm">{experiences[experience].description}</p>
        </div>
      </div>
    </div>
  );
};
