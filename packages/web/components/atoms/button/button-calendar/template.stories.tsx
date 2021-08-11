import { Story, Meta } from '@storybook/react';
import {
  CalendarButtonTemplate,
  CalendarButtonTemplateProps,
} from './template';

export default {
  title: 'Atoms/Button',
  component: CalendarButtonTemplate,
} as Meta;

const ButtonStory: Story<CalendarButtonTemplateProps> = (args) => (
  <CalendarButtonTemplate {...args} />
);

export const Calendar = ButtonStory.bind({});
Calendar.args = {
  disabled: false,
  number: 3,
  onClick: () => alert('Triggered onClick'),
};
