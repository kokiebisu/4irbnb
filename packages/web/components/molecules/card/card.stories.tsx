import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps, $Card } from '@card';

import { types as HostingTypes } from '@card/card.hosting';

export default {
  title: 'Molecules/Card',
  component: Card,
} as Meta;

const CardStory: Story<CardProps> = (args) => <Card {...args} />;

export const Category = CardStory.bind({});
Category.args = {
  variant: $Card.CATEGORY,
};

Category.decorators = [
  (Story) => (
    <div style={{ width: '33.3%' }}>
      <Story />
    </div>
  ),
];

export const Horizontal = CardStory.bind({});
Horizontal.args = {
  variant: $Card.HORIZONTAL,
};

Horizontal.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

Horizontal.argTypes = {
  superhost: {
    control: 'boolean',
  },
  save: {
    control: 'boolean',
  },
};

export const Vertical = CardStory.bind({});
Vertical.args = {
  variant: $Card.VERTICAL,
};
Vertical.argTypes = {
  save: {
    control: 'boolean',
  },
};

export const TypeStay = CardStory.bind({});
TypeStay.args = {
  variant: $Card.TYPESTAY,
};

TypeStay.decorators = [
  (Story) => (
    <div style={{ width: 200 }}>
      <Story />
    </div>
  ),
];

export const Arrangements = CardStory.bind({});
Arrangements.args = {
  variant: $Card.ARRANGEMENTS,
};

export const Checkin = CardStory.bind({});
Checkin.args = {
  variant: $Card.CHECKIN,
};

Checkin.decorators = [
  (Story) => (
    <div style={{ width: 500 }}>
      <Story />
    </div>
  ),
];

export const Review = CardStory.bind({});
Review.args = {
  variant: $Card.REVIEW,
};

export const Stay = CardStory.bind({});
Stay.args = {
  variant: $Card.STAY,
};

export const Nearby = CardStory.bind({});
Nearby.args = {
  variant: $Card.NEARBY,
};

export const Online = CardStory.bind({});
Online.args = {
  variant: $Card.ONLINE,
};

Online.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const Participate = CardStory.bind({});
Participate.args = {
  variant: $Card.PARTICIPATE,
};
Participate.argTypes = {
  categoryType: {
    control: {
      type: 'select',
      options: ['call', 'private'],
    },
  },
};

export const Available = CardStory.bind({});
Available.args = {
  variant: $Card.AVAILABLE,
};
Available.decorators = [
  (Story) => (
    <div style={{ maxWidth: '25%' }}>
      <Story />
    </div>
  ),
];

export const Host = CardStory.bind({});
Host.args = {
  variant: $Card.HOST,
};
Host.decorators = [
  (Story) => (
    <div style={{ width: 400 }}>
      <Story />
    </div>
  ),
];

export const Set = CardStory.bind({});
Set.args = {
  variant: $Card.SET,
};

export const Again = CardStory.bind({});
Again.args = {
  variant: $Card.AGAIN,
};

export const Works = CardStory.bind({});
Works.args = {
  variant: $Card.WORKS,
};
Works.argTypes = {
  work: {
    control: {
      type: 'select',
      options: ['design', 'share', 'submit', 'setup'],
    },
  },
};

export const Sharing = CardStory.bind({});
Sharing.args = {
  variant: $Card.SHARING,
};
Sharing.argsTypes = {
  sharing: {
    control: {
      type: 'select',
      options: ['meditate', 'baking', 'magic'],
    },
  },
};

export const How = CardStory.bind({});
How.args = {
  variant: $Card.HOW,
};
How.argTypes = {
  how: {
    control: {
      type: 'select',
      options: ['qualified', 'control', 'notified'],
    },
  },
};
How.decorators = [
  (Story) => (
    <div style={{ width: 225 }}>
      <Story />
    </div>
  ),
];

export const Hosting = CardStory.bind({});
Hosting.args = {
  variant: $Card.HOSTING,
};
Hosting.argTypes = {
  type: {
    control: {
      type: 'select',
      options: Object.keys(HostingTypes),
    },
  },
};

export const Video = CardStory.bind({});
Video.args = {
  variant: $Card.VIDEO,
};
Video.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const Starting = CardStory.bind({});
Starting.args = {
  variant: $Card.STARTING,
  ratings: 5,
  reviews: 100,
  country: 'Italy',
  title: 'Title',
  minCost: 56,
  slots: ['11:30', '3:30'],
  imgUrl:
    'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster',
  videoUrl:
    'https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400',
};
Starting.decorators = [
  (Story) => (
    <div style={{ width: 400 }}>
      <Story />
    </div>
  ),
];

export const Collection = CardStory.bind({});
Collection.args = {
  variant: $Card.COLLECTION,
};
Collection.decorators = [
  (Story) => (
    <div style={{ width: 500 }}>
      <Story />
    </div>
  ),
];
