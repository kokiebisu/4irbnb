import { Meta, Story } from '@storybook/react';
import { HostCardTemplate, HostCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: HostCardTemplate,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const CardStory: Story<HostCardTemplateProps> = (args) => (
  <HostCardTemplate {...args} />
);

export const Host = CardStory.bind({});
Host.args = {
  host: 'Host',
  stayType: 'Type',
  location: 'Location',
};
