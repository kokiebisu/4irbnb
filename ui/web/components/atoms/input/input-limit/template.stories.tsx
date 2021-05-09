import { Story, Meta } from '@storybook/react';
import { LimitInputTemplate, LimitInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: LimitInputTemplate,
} as Meta;

const InputStory: Story<LimitInputTemplateProps> = (args) => (
  <LimitInputTemplate {...args} />
);

export const Limit = InputStory.bind({});
Limit.args = {
  value: 'Title',
  onChange: () => alert('on change'),
  limit: 50,
};
