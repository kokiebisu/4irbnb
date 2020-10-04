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

const ButtonTemplate: Story<CardProps> = (args) => <Card {...args} />;

export const landing = ButtonTemplate.bind({});
landing.args = {
  card: {
    imgUrl: 'img/card2.jpg',
    title: 'Unique stays',
    description: 'Spaces that are more than just a place to sleep.',
    to: '/',
  },
  type: 'landing',
};
