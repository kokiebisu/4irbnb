import { Story, Meta } from '@storybook/react';
import { GlobeButton, GlobeButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: GlobeButton,
} as Meta;

const ButtonStory: Story<GlobeButtonProps> = (args) => (
  <GlobeButton {...args} />
);

export const Globe = ButtonStory.bind({});
Globe.args = {
  language: 'English',
  region: 'Vancouver',
  selected: false,
};
