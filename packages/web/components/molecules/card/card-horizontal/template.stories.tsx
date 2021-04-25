import { Meta, Story } from '@storybook/react';
import {
  HorizontalCardTemplate,
  HorizontalCardTemplateProps,
} from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: HorizontalCardTemplate,
} as Meta;

const CardStory: Story<HorizontalCardTemplateProps> = (args) => (
  <HorizontalCardTemplate {...args} />
);

export const Horizontal = CardStory.bind({});
Horizontal.args = {
  images: undefined,
  type: 'Type of Stay',
  ratings: 5.0,
  location: 'Location',
  title: 'Title should be here',
  numberOfReviews: 100,
  superhost: false,
  save: false,
};
Horizontal.decorators = [
  (Story) => (
    <div style={{ maxWidth: 300 }}>
      <Story />
    </div>
  ),
];
