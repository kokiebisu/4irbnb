import { Story, Meta } from '@storybook/react';
import { PlaceInputTemplate, PlaceInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: PlaceInputTemplate,
} as Meta;

const InputStory: Story<PlaceInputTemplateProps> = (args) => (
  <PlaceInputTemplate {...args} />
);

export const Place = InputStory.bind({});
Place.args = {
  value: 'Location',
  direction: undefined,
  onChange: () => alert('on change'),
};
