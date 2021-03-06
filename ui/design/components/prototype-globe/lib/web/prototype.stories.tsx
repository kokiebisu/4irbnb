import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Prototype, PrototypeProps, $PROTOTYPE } from '..';

export default {
  title: 'Prototypes/Globe',
  component: Prototype,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const TemplateStory: Story<PrototypeProps> = (args) => <Prototype {...args} />;

export const Language = TemplateStory.bind({});
Language.args = {
  variant: $PROTOTYPE.language,
};

export const Currency = TemplateStory.bind({});
Currency.args = {
  variant: $PROTOTYPE.currency,
};
