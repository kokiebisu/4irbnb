import { Meta, Story } from '@storybook/react';
import { VerticalCardTemplate, VerticalCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: VerticalCardTemplate,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const CardStory: Story<VerticalCardTemplateProps> = (args) => (
  <VerticalCardTemplate {...args} />
);

export const Vertical = CardStory.bind({});
Vertical.args = {
  ratings: 5.0,
  number_of_reviews: 100,
  save: false,
  country: 'Country',
  title: 'Title',
  cost: 10,
};
