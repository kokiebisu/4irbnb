import { Story, Meta } from '@storybook/react';
import { RadioInputTemplate, RadioInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: RadioInputTemplate,
} as Meta;

const InputStory: Story<RadioInputTemplateProps> = (args) => (
  <RadioInputTemplate {...args} />
);

export const Radio = InputStory.bind({});
Radio.args = {
  title: 'Radio Title',
  subtitle: 'Radio Subtitle',
  value: false,
  onChange: () => alert('on select'),
};
