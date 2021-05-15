import { Story, Meta } from '@storybook/react';
import {
  DestinationButtonTemplate,
  DestinationButtonTemplateProps,
} from './template';

export default {
  title: 'Atoms/Button',
  component: DestinationButtonTemplate,
} as Meta;

const ButtonStory: Story<DestinationButtonTemplateProps> = (args) => (
  <DestinationButtonTemplate {...args} />
);

export const Destination = ButtonStory.bind({});
Destination.args = {
  city: 'Vancouver',
  location: 'BC',
};
