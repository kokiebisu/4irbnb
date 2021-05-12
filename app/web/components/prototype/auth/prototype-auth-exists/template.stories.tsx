import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  ExistsPrototypeTemplate,
  ExistsPrototypeTemplateProps,
} from './template';

export default {
  title: 'Prototypes/Exists',
  component: ExistsPrototypeTemplate,
} as Meta;

const ExistsPrototypeStory: Story<ExistsPrototypeTemplateProps> = (args) => (
  <ExistsPrototypeTemplate {...args} />
);

export const Exists = ExistsPrototypeStory.bind({});
Exists.args = {
  variant: 'Exists',
};
