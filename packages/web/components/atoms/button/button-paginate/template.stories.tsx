import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  PaginateButtonTemplate,
  PaginateButtonTemplateProps,
} from './template';

export default {
  title: 'Atoms/Button',
  component: PaginateButtonTemplate,
} as Meta;

const ButtonStory: Story<PaginateButtonTemplateProps> = (args) => (
  <PaginateButtonTemplate {...args} />
);

export const Paginate = ButtonStory.bind({});
Paginate.args = {
  direction: 'left',
  disable: false,
};
