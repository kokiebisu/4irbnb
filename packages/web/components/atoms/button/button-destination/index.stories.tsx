import { Story, Meta } from '@storybook/react';
import { DestinationButton, DestinationButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: DestinationButton,
} as Meta;

const ButtonStory: Story<DestinationButtonProps> = (args) => (
  <DestinationButton {...args} />
);

export const Destination = ButtonStory.bind({});
Destination.args = {
  city: 'Vancouver',
  location: 'BC',
};
