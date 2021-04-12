import { Story, Meta } from '@storybook/react';
import { PriceInput, PriceInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: PriceInput,
} as Meta;

const InputStory: Story<PriceInputProps> = (args) => <PriceInput {...args} />;

export const Price = InputStory.bind({});
Price.args = {
  name: 'text',
  onChange: () => alert('on change'),
  onKeyPress: () => alert('on key press'),
  value: '500',
};
