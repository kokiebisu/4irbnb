import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  TransparentButtonTemplate,
  TransparentButtonTemplateProps,
} from './template';

export default {
  title: 'Atoms/Button',
  component: TransparentButtonTemplate,
} as Meta;

const ButtonStory: Story<TransparentButtonTemplateProps> = (args) => (
  <TransparentButtonTemplate {...args} />
);

export const Transparent = ButtonStory.bind({});
Transparent.args = {
  kind: 'globe',
  inverse: false,
};
