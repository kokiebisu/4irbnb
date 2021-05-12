import { Story, Meta } from '@storybook/react';
import { BarButtonTemplate, BarButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: BarButtonTemplate,
} as Meta;

const ButtonStory: Story<BarButtonTemplateProps> = (args) => (
  <BarButtonTemplate {...args} />
);

export const Bar = ButtonStory.bind({});
Bar.args = {
  barType: 'menu',
  selected: false,
};
