import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Bullet, BulletProps, $BULLET } from '..';

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

const TemplateStory: Story<BulletProps> = (args) => <Bullet {...args} />;

export const Characteristic = TemplateStory.bind({});
Characteristic.args = {
  variant: $BULLET.characteristic,
};
Characteristic.argTypes = {
  characteristicType: {
    control: {
      type: 'select',
      options: ['house', 'sparkle', 'door', 'calendar', 'guidelines', 'time'],
    },
  },
};

export const Amenity = TemplateStory.bind({});
Amenity.args = {
  variant: $BULLET.amenity,
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

export const Know = TemplateStory.bind({});
Know.args = {
  variant: $BULLET.know,
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

export const Rating = TemplateStory.bind({});
Rating.args = {
  variant: $BULLET.rating,
};

export const Bring = TemplateStory.bind({});
Bring.args = {
  variant: $BULLET.bring,
};

export const Experience = TemplateStory.bind({});
Experience.args = {
  variant: $BULLET.experience,
};
Experience.argTypes = {
  experience: {
    control: {
      type: 'select',
      options: ['host', 'activities', 'global'],
    },
  },
};

export const Priority = TemplateStory.bind({});
Priority.args = {
  variant: $BULLET.priority,
};
Priority.argTypes = {
  priority: {
    control: {
      type: 'select',
      options: ['protection', 'guidance', 'requirements'],
    },
  },
};

export const Help = TemplateStory.bind({});
Help.args = {
  variant: $BULLET.help,
};
Help.argTypes = {
  help: {
    control: {
      type: 'select',
      options: ['support', 'tools', 'insights', 'education'],
    },
  },
};

export const Required = TemplateStory.bind({});
Required.args = {
  variant: $BULLET.required,
};

export const OnlineHost = TemplateStory.bind({});
OnlineHost.args = {
  variant: $BULLET.onlinehost,
};

export const Score = TemplateStory.bind({});
Score.args = {
  variant: $BULLET.score,
};

export const Question = TemplateStory.bind({});
Question.args = {
  variant: $BULLET.question,
};

export const Check = TemplateStory.bind({});
Check.args = {
  variant: $BULLET.check,
};
