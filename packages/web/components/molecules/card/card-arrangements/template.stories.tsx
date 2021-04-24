import { Meta, Story } from '@storybook/react';
import { ArrangementsCardTemplate, ArrangementsCardProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: ArrangementsCardTemplate,
} as Meta;

const CardStory: Story<ArrangementsCardProps> = (args) => (
  <ArrangementsCardTemplate {...args} />
);

export const Arrangements = CardStory.bind({});
Arrangements.args = {
  card: {
    type: 'Bedroom',
    beds: [{ type: 'double bed', count: 1 }],
  },
};
