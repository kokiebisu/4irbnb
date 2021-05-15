import { Meta, Story } from '@storybook/react';
import {
  AvailabilityBarTemplate,
  AvailabilityBarTemplateProps,
} from './template';

export default {
  title: 'Organisms/Bar',
  component: AvailabilityBarTemplate,
} as Meta;

const BarStory: Story<AvailabilityBarTemplateProps> = (args) => (
  <AvailabilityBarTemplate {...args} />
);

export const Availability = BarStory.bind({});
Availability.args = {
  ratings: 4.99,
  reviews: 271,
};
