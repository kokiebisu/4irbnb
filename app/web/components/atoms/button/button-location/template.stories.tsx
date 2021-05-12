import { Story, Meta } from '@storybook/react';
import {
  LocationButtonTemplate,
  LocationButtonTemplateProps,
} from './template';

export default {
  component: LocationButtonTemplate,
  title: 'Atoms/Button',
} as Meta;

const ButtonStory: Story<LocationButtonTemplateProps> = (args) => (
  <LocationButtonTemplate {...args} />
);

export const Location = ButtonStory.bind({});
Location.args = {
  locationType: 'explore',
  location: 'Vancouver',
  from: 'June 17th',
  to: 'June 23rd',
  guests: 4,
};
