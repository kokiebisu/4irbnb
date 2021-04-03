import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Prototype, PrototypeProps } from '@prototype/searchbar';

export default {
  title: 'Prototypes/Searchbar',
  component: Prototype,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const SearchbarPrototypeStory: Story<PrototypeProps> = (args) => (
  <Prototype {...args} />
);

export const Stay = SearchbarPrototypeStory.bind({});
Stay.args = {
  variant: 'stay',
};
Stay.decorators = [
  (Story) => (
    <div style={{ maxWidth: 720 }}>
      <Story />
    </div>
  ),
];
