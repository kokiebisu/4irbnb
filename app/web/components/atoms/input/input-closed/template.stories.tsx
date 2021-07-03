import { Story, Meta } from '@storybook/react';
import { ClosedInputTemplate, ClosedInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: ClosedInputTemplate,
} as Meta;

const InputStory: Story<ClosedInputTemplateProps> = (args) => (
  <ClosedInputTemplate {...args} />
);

export const Closed = InputStory.bind({});
Closed.args = {
  title: 'Title',
  flag: false,
  onSwitchToFalse: () => alert('on switch to false'),
  onSwitchToTrue: () => alert('on switch to true'),
};
