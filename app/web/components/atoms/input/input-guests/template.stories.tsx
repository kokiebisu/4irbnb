import { Story, Meta } from '@storybook/react';
import { GuestsInputTemplate, GuestsInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: GuestsInputTemplate,
} as Meta;

const InputStory: Story<GuestsInputTemplateProps> = (args) => (
  <GuestsInputTemplate {...args} />
);

export const Guests = InputStory.bind({});
Guests.args = {
  onChange: () => alert('on change'),
  value: 1,
  direction: undefined,
  errors: false,
};
