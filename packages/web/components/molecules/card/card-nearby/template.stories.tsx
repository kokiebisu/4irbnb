import { Meta, Story } from '@storybook/react';
import { NearbyCardTemplate, NearbyCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: NearbyCardTemplate,
} as Meta;

const CardStory: Story<NearbyCardTemplateProps> = (args) => (
  <NearbyCardTemplate {...args} />
);

export const Nearby = CardStory.bind({});
Nearby.args = {
  city: 'City',
  hours: 1,
  size: 'sm',
};
