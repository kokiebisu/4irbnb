import { Story, Meta } from '@storybook/react';
import {
  LocationButtonTemplate,
  LocationButtonTemplateProps,
} from './template';

export default {
  component: LocationButtonTemplate,
  title: 'Atoms/Button/Location',
} as Meta;

const ButtonStory: Story<LocationButtonTemplateProps> = (args) => (
  <LocationButtonTemplate {...args} />
);

export const Explore = ButtonStory.bind({});
Explore.args = {
  icon: (
    <img
      className="block rounded w-10 h-10"
      src="https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq"
    />
  ),
  title: 'Explore nearby destinations',
  onClick: () => alert('Triggered onClick'),
};

export const Recent = ButtonStory.bind({});
Recent.args = {
  icon: <div className="block rounded w-full h-full" />,
  title: `Vancouver · Stays`,
  description: 'July 7 - August 9, 5 guests',
  onClick: () => alert('Triggered onClick'),
};
