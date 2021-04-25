import { Meta, Story } from '@storybook/react';
import { OnlineCardTemplate, OnlineCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: OnlineCardTemplate,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const CardStory: Story<OnlineCardTemplateProps> = (args) => (
  <OnlineCardTemplate {...args} />
);

export const Online = CardStory.bind({});
Online.args = {
  title: 'Learn to make soup dumplings in Shanghai',
  inverse: false,
};
