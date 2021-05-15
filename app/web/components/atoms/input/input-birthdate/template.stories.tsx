import { Story, Meta } from '@storybook/react';
import {
  BirthdateInputTemplate,
  BirthdateInputTemplateProps,
} from './template';

export default {
  title: 'Atoms/Input',
  component: BirthdateInputTemplate,
} as Meta;

const InputStory: Story<BirthdateInputTemplateProps> = (args) => (
  <BirthdateInputTemplate {...args} />
);

export const Birthdate = InputStory.bind({});
Birthdate.args = {
  onChange: () => alert('on change'),
  value: '1995',
  direction: undefined,
  errors: false,
  dateType: 'year',
};
