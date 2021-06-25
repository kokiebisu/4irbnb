import { Story, Meta } from '@storybook/react';
import { LogoButtonTemplate, LogoButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button/Logo',
  component: LogoButtonTemplate,
} as Meta;

const ButtonStory: Story<LogoButtonTemplateProps> = (args) => (
  <LogoButtonTemplate {...args} />
);

export const Name = ButtonStory.bind({});
Name.args = {
  noName: false,
  fill: '#F5385D',
  onClick: () => alert('Triggered onClick'),
};

export const NoName = ButtonStory.bind({});
NoName.args = {
  noName: false,
  fill: '#F5385D',
  onClick: () => alert('Triggered onClick'),
};
