import { Meta, Story } from '@storybook/react';
import { CheckInCardTemplate, CheckInCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: CheckInCardTemplate,
} as Meta;

const CardStory: Story<CheckInCardTemplateProps> = (args) => (
  <CheckInCardTemplate {...args} />
);

export const CheckIn = CardStory.bind({});
CheckIn.args = {
  title: 'Title',
};
CheckIn.decorators = [
  (Story) => (
    <div style={{ maxWidth: 450 }}>
      <Story />
    </div>
  ),
];
