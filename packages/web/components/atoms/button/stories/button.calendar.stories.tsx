import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalendarButton, CalendarButtonProps } from '../button.calendar';

export default {
  title: 'Atoms/Button',
  component: CalendarButton,
} as Meta;

const ButtonStory: Story<CalendarButtonProps> = (args) => (
  <CalendarButton {...args} />
);

export const Calendar = ButtonStory.bind({});
Calendar.args = {
  disabled: false,
  number: 3,
};
