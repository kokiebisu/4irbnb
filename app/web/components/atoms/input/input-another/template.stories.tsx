import { Story, Meta } from '@storybook/react';
import { AnotherInputTemplate, AnotherInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: AnotherInputTemplate,
} as Meta;

const InputStory: Story<AnotherInputTemplateProps> = (args) => (
  <AnotherInputTemplate {...args} />
);

export const Another = InputStory.bind({});
Another.args = {
  onChange: () => alert('on change'),
};
