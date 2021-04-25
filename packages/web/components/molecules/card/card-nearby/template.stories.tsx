import { Meta, Story } from '@storybook/react';
import { NearbyCardTemplate, NearbyCardTemplateProps } from './template';
import * as utils from './util';

export default {
  title: 'Design System/Molecules/Card',
  component: NearbyCardTemplate,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const CardStory: Story<NearbyCardTemplateProps> = (args) => (
  <NearbyCardTemplate {...args} />
);

export const Nearby = CardStory.bind({});
Nearby.args = {
  ...utils,
  city: 'Toronto',
  hours: 3,
  size: 'sm',
};
