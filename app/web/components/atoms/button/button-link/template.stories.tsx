import { Story, Meta } from '@storybook/react';
import { LinkButtonTemplate, LinkButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: LinkButtonTemplate,
} as Meta;

const ButtonStory: Story<LinkButtonTemplateProps> = (args) => (
  <LinkButtonTemplate {...args} />
);

export const Link = ButtonStory.bind({});
Link.args = {};
