import { Story, Meta } from '@storybook/react';
import { CounterInputTemplate, CounterInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: CounterInputTemplate,
} as Meta;

const InputStory: Story<CounterInputTemplateProps> = (args) => (
  <CounterInputTemplate {...args} />
);

export const Counter = InputStory.bind({});
Counter.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  value: 5,
  onAdd: () => alert('on add'),
  onSubtract: () => alert('on subtract'),
  min: 0,
  max: 5,
  type: 'create',
};
