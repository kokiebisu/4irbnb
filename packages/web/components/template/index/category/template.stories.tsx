import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CategoryTemplate, CategoryTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Templates/Index',
  component: CategoryTemplate,
} as Meta;

const TemplateStory: Story<CategoryTemplateProps> = (args) => (
  <CategoryTemplate {...args} />
);

export const Category = TemplateStory.bind({});
Category.args = {
  ...mockData,
};
