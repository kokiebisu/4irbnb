import { Analytics, CustomerService, Education, ToolBox } from '@svg/original';

/**
 * Renders the help bullet
 * @param {string} help - Type of help bullet
 */
export const HelpBullet: React.FC<{
  help?: 'support' | 'tools' | 'insights' | 'education';
}> = ({ help = 'support' }) => {
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
    <div className="flex">
      <div className="mr-4">{helps[help].icon}</div>
      <div>
        <div className="mb-1">
          <h3>{helps[help].title}</h3>
        </div>
        <div>
          <h4 className="text-base leading-6">{helps[help].description}</h4>
        </div>
      </div>
    </div>
  );
};
