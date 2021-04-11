import { Story, Meta } from '@storybook/react';
import { BarButton, BarButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: BarButton,
} as Meta;

const ButtonStory: Story<BarButtonProps> = (args) => <BarButton {...args} />;

export const Bar = ButtonStory.bind({});
Bar.args = {
  barType: 'menu',
  selected: 'menu',
};
