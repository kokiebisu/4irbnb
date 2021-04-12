import { Story, Meta } from '@storybook/react';
import { CounterInput, CounterInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: CounterInput,
} as Meta;

const InputStory: Story<CounterInputProps> = (args) => (
  <CounterInput {...args} />
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
