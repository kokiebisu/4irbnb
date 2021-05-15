import { Story, Meta } from '@storybook/react';
import { ExpandButtonTemplate, ExpandButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: ExpandButtonTemplate,
} as Meta;

const ButtonStory: Story<ExpandButtonTemplateProps> = (args) => (
  <ExpandButtonTemplate {...args} />
);

export const Expand = ButtonStory.bind({});
Expand.args = {
  title: 'Button',
};
