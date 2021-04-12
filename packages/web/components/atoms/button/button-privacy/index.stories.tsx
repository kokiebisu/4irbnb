import { Story, Meta } from '@storybook/react';
import { PrivacyButton, PrivacyButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: PrivacyButton,
} as Meta;

const ButtonStory: Story<PrivacyButtonProps> = (args) => (
  <PrivacyButton {...args} />
);

export const Privacy = ButtonStory.bind({});
Privacy.args = {
  title: 'Button',
  inverse: false,
};
