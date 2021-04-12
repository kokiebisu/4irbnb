import { Story, Meta } from '@storybook/react';
import { RegionInput, RegionInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: RegionInput,
} as Meta;

const InputStory: Story<RegionInputProps> = (args) => <RegionInput {...args} />;

export const Region = InputStory.bind({});
Region.args = {
  onChange: () => alert('on change'),
  value: 'canada',
  direction: undefined,
  errors: false,
};
