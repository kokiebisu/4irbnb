import { Story, Meta } from '@storybook/react';
import { CalendarButton, CalendarButtonProps } from '.';

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
