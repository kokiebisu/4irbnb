import { Meta, Story } from '@storybook/react';
import {
  ArrangementsCardTemplate,
  ArrangementsCardTemplateProps,
} from './template';

export default {
  title: 'Molecules/Card',
  component: ArrangementsCardTemplate,
} as Meta;

const CardStory: Story<ArrangementsCardTemplateProps> = (args) => (
  <ArrangementsCardTemplate {...args} />
);

export const Arrangements = CardStory.bind({});
Arrangements.args = {
  type: 'double bed',
  count: 1,
};
