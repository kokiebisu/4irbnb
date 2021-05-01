import { Story, Meta } from '@storybook/react';
import { BorderButtonTemplate, BorderButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: BorderButtonTemplate,
} as Meta;

const ButtonStory: Story<BorderButtonTemplateProps> = (args) => (
  <BorderButtonTemplate {...args} />
);

export const Border = ButtonStory.bind({});
Border.args = {
  title: 'Title',
  inverse: false,
  size: 'md',
  bold: false,
  stretch: false,
};
