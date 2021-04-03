import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Bullet, BulletProps, $Bullet } from '@bullet';

import { types as OnlineHostTypes } from '@bullet/bullet.onlinehost';

export default {
  title: 'Atoms/Bullet',
  component: Bullet,
  argTypes: {
    variant: {
      control: { disable: true },
    },
    extendsTo: {
      control: { disable: true },
    },
  },
} as Meta;

const BulletStory: Story<BulletProps> = (args) => <Bullet {...args} />;

export const Characteristic = BulletStory.bind({});
Characteristic.args = {
  variant: $Bullet.CHARACTERISTIC,
};
Characteristic.argTypes = {
  characteristicType: {
    control: {
      type: 'select',
      options: ['house', 'sparkle', 'door', 'calendar', 'guidelines', 'time'],
    },
  },
};

export const Amenity = BulletStory.bind({});
Amenity.args = {
  variant: $Bullet.AMENITY,
};
Amenity.argTypes = {
  removed: {
    control: 'boolean',
  },
  amenityType: {
    control: {
      type: 'select',
      options: ['smoke', 'tv', 'kitchen', 'heating', 'entrance', 'carbon'],
    },
  },
};

export const Know = BulletStory.bind({});
Know.args = {
  variant: $Bullet.KNOW,
};
Know.argTypes = {
  categoryType: {
    control: {
      type: 'select',
      options: [
        'checkin',
        'checkout',
        'self',
        'children',
        'smoking',
        'pets',
        'parties',
        'cleaning',
        'distancing',
        'caution',
        'check',
      ],
    },
  },
};

export const Rating = BulletStory.bind({});
Rating.args = {
  variant: $Bullet.RATING,
};

export const Bring = BulletStory.bind({});
Bring.args = {
  variant: $Bullet.BRING,
};

export const Experience = BulletStory.bind({});
Experience.args = {
  variant: $Bullet.EXPERIENCE,
};
Experience.argTypes = {
  experience: {
    control: {
      type: 'select',
      options: ['host', 'activities', 'global'],
    },
  },
};

export const Priority = BulletStory.bind({});
Priority.args = {
  variant: $Bullet.PRIORITY,
};
Priority.argTypes = {
  priority: {
    control: {
      type: 'select',
      options: ['protection', 'guidance', 'requirements'],
    },
  },
};

export const Help = BulletStory.bind({});
Help.args = {
  variant: $Bullet.HELP,
};
Help.argTypes = {
  help: {
    control: {
      type: 'select',
      options: ['support', 'tools', 'insights', 'education'],
    },
  },
};

export const Required = BulletStory.bind({});
Required.args = {
  variant: $Bullet.REQUIRED,
};

export const OnlineHost = BulletStory.bind({});
OnlineHost.args = {
  variant: $Bullet.ONLINEHOST,
};
OnlineHost.argTypes = {
  type: {
    control: {
      type: 'select',
      options: Object.keys(OnlineHostTypes),
    },
  },
};

export const Score = BulletStory.bind({});
Score.args = {
  variant: $Bullet.SCORE,
};

export const Question = BulletStory.bind({});
Question.args = {
  variant: $Bullet.QUESTION,
};

export const Check = BulletStory.bind({});
Check.args = {
  variant: $Bullet.CHECK,
};
