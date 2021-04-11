import { $Icon, Icon } from '@icons';

export interface HelpBulletProps {
  helpType?: 'support' | 'tools' | 'insights' | 'education';
}

/**
 * Renders the help bullet
 * @param {string} help - Type of help bullet
 */
export const HelpBullet: React.FC<HelpBulletProps> = ({ helpType }) => {
  const types = {
    support: {
      icon: (
        <Icon
          variant={$Icon.GENERAL}
          generalType="customerService"
          width={28}
        />
      ),
      title: '24/7 customer support',
      description:
        'From setting up your listing to concerns about guests, our global team is here to support you by phone, email, and chat, every step of the way.',
    },
    tools: {
      icon: <Icon variant={$Icon.GENERAL} generalType="toolbox" width={28} />,
      title: 'Tools to help you succeed',
      description:
        'Our tools make it easy to set the right prices, manage reservations, message with guests, receive payments, track earnings, and more.',
    },
    insights: {
      icon: <Icon variant={$Icon.GENERAL} generalType="analytics" width={28} />,
      title: 'Personalized insights',
      description:
        "We'll share local travel trends and suggest ways to improve to help you earn great reviews and grow your business.",
    },
    education: {
      icon: <Icon variant={$Icon.GENERAL} generalType="education" width={28} />,
      title: 'Education and training',
      description:
        'Find guidance in the Resource Centre, join a free webinar on hosting basics, and connect with other hosts in our Community Centre.',
    },
  };
  return (
    <div className="flex">
      <div className="mr-4">{types[helpType].icon}</div>
      <div>
        <div className="mb-2">
          <h3>{types[helpType].title}</h3>
        </div>
        <div>
          <h4 className="text-md leading-6">{types[helpType].description}</h4>
        </div>
      </div>
    </div>
  );
};

export const help = (props) => {
  return {
    help: {
      component: <HelpBullet {...props} />,
    },
  };
};
