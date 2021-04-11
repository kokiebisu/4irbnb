import { Story, Meta } from '@storybook/react';
import { BannerButton, BannerButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: BannerButton,
} as Meta;

const ButtonStory: Story<BannerButtonProps> = (args) => (
  <BannerButton {...args} />
);

export const Banner = ButtonStory.bind({});
Banner.args = {
  title: 'Button',
};
