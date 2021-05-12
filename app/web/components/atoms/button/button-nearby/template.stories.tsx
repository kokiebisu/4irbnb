import { Story, Meta } from '@storybook/react';
import { NearbyButtonTemplate, NearbyButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: NearbyButtonTemplate,
} as Meta;

const ButtonStory: Story<NearbyButtonTemplateProps> = (args) => (
  <NearbyButtonTemplate {...args} />
);

export const Nearby = ButtonStory.bind({});
Nearby.args = {
  label: 'Nearby',
};
