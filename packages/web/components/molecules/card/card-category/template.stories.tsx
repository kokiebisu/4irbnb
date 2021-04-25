import { Meta, Story } from '@storybook/react';
import { CategoryCardTemplate, CategoryCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: CategoryCardTemplate,
} as Meta;

const CardStory: Story<CategoryCardTemplateProps> = (args) => (
  <CategoryCardTemplate {...args} />
);

export const Category = CardStory.bind({});
Category.args = {
  title: 'Title',
};
Category.decorators = [
  (Story) => (
    <div style={{ maxWidth: 300 }}>
      <Story />
    </div>
  ),
];
