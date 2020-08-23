import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Card from 'molecules/Card/card.section';

export default {
  title: 'Design Systems/Card/Section',
  component: Card,
} as Meta;

interface Props {
  styles?: any;
  title?: string;
  description?: string;
  option?: string;
}

const SectionCardTemplate: Story<Props> = (args) => <Card {...args} />;

export const blackLivesMatter = SectionCardTemplate.bind({});
blackLivesMatter.args = {
  title: 'We stand with #BlackLivesMatter',
  description:
    'We believe in a world where everyone belongs. We reject all racism that stands in the way.',
  option: 'Donate',
};
