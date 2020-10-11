import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '../../../components/atoms/button/button.component';
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import animation from '../../../styles/animation.module.scss';
import styles from '../../../styles/index.module.scss';
import button from '../../../components/atoms/button/button.module.scss';
import { Globe, ChevronDown } from '../../../public/svg/regular';
import { Card, CardProps } from './card.component';
import { Avatar, Bars } from '../../../public/svg/original';
import { url } from 'inspector';

export default {
  title: 'Design System/Atoms/Card',
  component: Card,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const CardTemplate: Story<CardProps> = (args) => <Card {...args} />;

export const landing = CardTemplate.bind({});
landing.args = {
  type: 'landing',
};

landing.decorators = [
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
