import { HelpBulletVariants } from './template';

export const useHelpBulletContent = ({
  helpType,
}: {
  helpType: HelpBulletVariants;
}) => {
  const helpTypes = {
    support: {
      icon: { variant: 'general', generalType: 'customerService' },
      title: '24/7 customer support',
      description:
        'From setting up your listing to concerns about guests, our global team is here to support you by phone, email, and chat, every step of the way.',
    },
    tools: {
      icon: { variant: 'general', generalType: 'toolbox' },
      title: 'Tools to help you succeed',
      description:
        'Our tools make it easy to set the right prices, manage reservations, message with guests, receive payments, track earnings, and more.',
    },
    insights: {
      icon: { variant: 'general', generalType: 'analytics' },
      title: 'Personalized insights',
      description:
        "We'll share local travel trends and suggest ways to improve to help you earn great reviews and grow your business.",
    },
    education: {
      icon: { variant: 'general', generalType: 'education' },
      title: 'Education and training',
      description:
        'Find guidance in the Resource Centre, join a free webinar on hosting basics, and connect with other hosts in our Community Centre.',
    },
  };
  return { ...helpTypes[helpType] } as {
    icon: {
      variant: string;
      generalType: string;
    };
    title: string;
    description: string;
  };
};
