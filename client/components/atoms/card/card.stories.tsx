import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card } from './card.component';

import { CardProps } from './props';

export default {
  title: 'Design System/Atoms/Card',
  component: Card,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const CardTemplate: Story<CardProps> = (args) => <Card {...args} />;

export const category = CardTemplate.bind({});
category.args = {
  type: 'category',
};

category.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const horizontal = CardTemplate.bind({});
horizontal.args = {
  type: 'horizontal',
};

horizontal.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const horizontalWithSuperhost = CardTemplate.bind({});
horizontalWithSuperhost.args = {
  type: 'horizontal',
  superhost: true,
};

horizontalWithSuperhost.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const horizontalWithSave = CardTemplate.bind({});
horizontalWithSave.args = {
  type: 'horizontal',
  save: true,
};

horizontalWithSave.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  ),
];

export const vertical = CardTemplate.bind({});
vertical.args = {
  type: 'vertical',
  save: true,
};

export const typeStay = CardTemplate.bind({});
typeStay.args = {
  type: 'typestay',
};

typeStay.decorators = [
  (Story) => (
    <div style={{ width: 200 }}>
      <Story />
    </div>
  ),
];

export const arrangements = CardTemplate.bind({});
arrangements.args = {
  type: 'arrangements',
};

export const checkin = CardTemplate.bind({});
checkin.args = {
  type: 'checkin',
};

checkin.decorators = [
  (Story) => (
    <div style={{ width: 500 }}>
      <Story />
    </div>
  ),
];

export const review = CardTemplate.bind({});
review.args = {
  type: 'review',
};
