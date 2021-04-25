import { Meta, Story } from '@storybook/react';
import {
  ParticipateCardTemplate,
  ParticipateCardTemplateProps,
} from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: ParticipateCardTemplate,
} as Meta;

const CardStory: Story<ParticipateCardTemplateProps> = (args) => (
  <ParticipateCardTemplate {...args} />
);

export const Participate = CardStory.bind({});
Participate.args = {
  city: 'City',
  hours: 1,
  size: 'sm',
};
