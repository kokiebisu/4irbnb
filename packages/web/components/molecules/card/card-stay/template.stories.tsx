import { Meta, Story } from '@storybook/react';
import { StayCardTemplate, StayCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: StayCardTemplate,
} as Meta;

const CardStory: Story<StayCardTemplateProps> = (args) => (
  <StayCardTemplate {...args} />
);

export const Stay = CardStory.bind({});
Stay.args = {
  typeStay: 'Type of stay',
  location: 'Location',
  title: 'Title of stay',
  accomodations: {
    guests: 1,
    bedroom: 1,
    beds: 1,
    bath: 1,
  },
  characteristics: ['characteristic'],
};
