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

export const horizontal = ButtonTemplate.bind({});
horizontal.args = {
  type: 'horizontal',
  card: {
    imgUrl:
      'https://a0.muscache.com/im/pictures/af97b312-1d07-4092-ac6d-a03fff6c5176.jpg?im_w=720',
    title: 'The Moulton Meadow Farm: Seaview Cabin',
    to: '/',
    superhost: false,
    ratings: 4.98,
    number_of_reviews: 259,
    type: 'Tiny house',
  },
  save: false,
};

export const horizontalWithSuperhost = ButtonTemplate.bind({});
horizontalWithSuperhost.args = {
  type: 'horizontal',
  card: {
    imgUrl:
      'https://a0.muscache.com/im/pictures/d5d015a1-1427-4c3c-99c1-20d79b136691.jpg?im_w=720',
    title: 'The Moulton Meadow Farm: Seaview Cabin',
    to: '/',
    superhost: true,
    ratings: 4.98,
    number_of_reviews: 259,
    type: 'Tiny house',
  },
  save: false,
};

export const horizontalWithSave = ButtonTemplate.bind({});
horizontalWithSave.args = {
  type: 'horizontal',
  card: {
    imgUrl:
      'https://a0.muscache.com/im/pictures/7e0063fa-d325-49ae-a6f6-285fe9928da4.jpg?im_w=720',
    title: 'The Moulton Meadow Farm: Seaview Cabin',
    to: '/',
    superhost: false,
    ratings: 4.98,
    number_of_reviews: 259,
    type: 'Tiny house',
  },
  save: true,
};

export const vertical = ButtonTemplate.bind({});
vertical.args = {
  type: 'vertical',
  card: {
    imgUrl:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1659111-active_media/original/4931efc9-f708-4619-9b25-51036194e1e1.jpg?aki_policy=poster',
    title: 'Go on a Leopard Safari in Sri Lanka',
    to: '/',
    ratings: 4.98,
    number_of_reviews: 259,
    cost: 17,
    country: 'Sri Lanka',
  },
  save: true,
};
