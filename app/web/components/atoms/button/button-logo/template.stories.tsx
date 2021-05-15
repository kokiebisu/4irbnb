import { Story, Meta } from '@storybook/react';
import { LogoButtonTemplate, LogoButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: LogoButtonTemplate,
} as Meta;

const ButtonStory: Story<LogoButtonTemplateProps> = (args) => (
  <LogoButtonTemplate {...args} />
);

export const Logo = ButtonStory.bind({});
Logo.args = {
  noName: false,
  fill: '#F5385D',
};
