import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input, InputProps, $Input } from '@input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta;

const InputStory: Story<InputProps> = (args) => <Input {...args} />;

export const Email = InputStory.bind({});
Email.args = {
  variant: $Input.EMAIL,
};

export const Password = InputStory.bind({});
Password.args = {
  variant: $Input.PASSWORD,
};

export const Name = InputStory.bind({});
Name.args = {
  variant: $Input.NAME,
};

export const Birthdate = InputStory.bind({});
Birthdate.args = {
  variant: $Input.BIRTHDATE,
};

export const Phone = InputStory.bind({});
Phone.args = {
  variant: $Input.PHONE,
};

export const Region = InputStory.bind({});
Region.args = {
  variant: $Input.REGION,
};

export const Place = InputStory.bind({});
Place.args = {
  variant: $Input.PLACE,
};

export const Guests = InputStory.bind({});
Guests.args = {
  variant: $Input.GUESTS,
};

export const Address = InputStory.bind({});
Address.args = {
  variant: $Input.ADDRESS,
};

export const Select = InputStory.bind({});
Select.args = {
  variant: $Input.SELECT,
};

export const Radio = InputStory.bind({});
Radio.args = {
  variant: $Input.RADIO,
};

export const Counter = InputStory.bind({});
Counter.args = {
  variant: $Input.COUNTER,
  title: 'Counter',
  subtitle: '',
  value: 0,
  add: () => alert('add'),
  subtract: () => alert('subtract'),
  min: 1,
  max: 4,
  type: 'create',
};

export const Text = InputStory.bind({});
Text.args = {
  variant: $Input.TEXT,
};

export const Checkbox = InputStory.bind({});
Checkbox.args = {
  variant: $Input.CHECKBOX,
};

export const TextArea = InputStory.bind({});
TextArea.args = {
  variant: $Input.TEXTAREA,
};

export const Verify = InputStory.bind({});
Verify.args = {
  variant: $Input.VERIFY,
};

export const Closed = InputStory.bind({});
Closed.args = {
  variant: $Input.CLOSED,
  title: 'Title here',
  flag: false,
  onClickSwitchToFalse: () => alert('Switches to false'),
  onClickSwitchToTrue: () => alert('Switches to true'),
};

export const Price = InputStory.bind({});
Price.args = {
  variant: $Input.PRICE,
  name: 'price',
  handleChange: () => alert('Handle input change'),
  handleKeyPress: () => alert('Handle key press'),
  value: 50,
};

export const Limit = InputStory.bind({});
Limit.args = {
  variant: $Input.LIMIT,
};

export const Photo = InputStory.bind({});
Photo.args = {
  variant: $Input.PHOTO,
};

export const Another = InputStory.bind({});
Another.args = {
  variant: $Input.ANOTHER,
};
