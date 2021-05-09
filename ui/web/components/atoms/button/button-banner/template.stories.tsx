import { Story, Meta } from '@storybook/react';
import { BannerButtonTemplate, BannerButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: BannerButtonTemplate,
} as Meta;

const ButtonStory: Story<BannerButtonTemplateProps> = (args) => (
  <BannerButtonTemplate {...args} />
);

export const Banner = ButtonStory.bind({});
Banner.args = {
  title: 'Button',
};
