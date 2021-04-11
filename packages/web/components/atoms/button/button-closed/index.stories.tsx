import { Story, Meta } from '@storybook/react';
import { ClosedButton, ClosedButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: ClosedButton,
} as Meta;

const ButtonStory: Story<ClosedButtonProps> = (args) => (
  <ClosedButton {...args} />
);

export const Closed = ButtonStory.bind({});
Closed.args = {
  closedType: 'close',
  selected: false,
};
