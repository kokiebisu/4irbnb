import { Icon, $Icon } from '@icons';
import { $Button, Button } from '@button';

enum kinds {
  protection = 'protection',
  guidance = 'guidance',
  requirements = 'requirements',
}

export interface PriorityBulletProps {
  priorityType?: kinds;
  onClick?: () => void;
}

/**
 * Renders the priority bullet
 * @param {string} priority - Type of priority bullet
 */
export const PriorityBullet: React.FC<PriorityBulletProps> = ({
  priorityType,
  onClick,
}) => {
  const types = {
    protection: {
      icon: (
        <Icon variant={$Icon.GENERAL} generalType="protection" width={40} />
      ),
      title: 'Host insurance and protection',
      description:
        'To support you in the rare event of an incident, each booking on AIrbnb includes property damae protection of up to $1M USD and liability insurance of up to $1M USD.',
      link: "How you're protected while hosting",
    },
    guidance: {
      icon: <Icon variant={$Icon.GENERAL} generalType="guidance" width={40} />,
      title: 'COVID-19 safety guidance and support',
      description:
        'To help protect the health of our community, we’ve partnered with experts to create safety practices for everyone, plus a cleaning process for hosts.',
      link: 'Explore the enhanced cleaning process',
    },
    requirements: {
      icon: (
        <Icon variant={$Icon.GENERAL} generalType="requirements" width={40} />
      ),
      title: 'Requirements for all guests',
      description:
        'To give hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behaviour.',
      link: 'Steps we take to help hosts feel confident',
    },
  };
  return (
    <div>
      <div>{types[priorityType].icon}</div>
      <div className="my-4">
        <h3 className="font-2xl">{types[priorityType].title}</h3>
      </div>
      <div className="mb-8">
        <p>{types[priorityType].description}</p>
      </div>
      <div>
        <Button
          title={types[priorityType].link}
          variant={$Button.UNDERLINE}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export const priority = (props) => {
  return {
    priority: { component: <PriorityBullet {...props} /> },
  };
};
