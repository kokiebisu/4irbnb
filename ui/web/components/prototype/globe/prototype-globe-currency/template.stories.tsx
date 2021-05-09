import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  CurrencyPrototypeTemplate,
  CurrencyPrototypeTemplateProps,
} from './template';

export default {
  title: 'Prototypes/Currency',
  component: CurrencyPrototypeTemplate,
} as Meta;

const CurrencyPrototypeStory: Story<CurrencyPrototypeTemplateProps> = (
  args
) => <CurrencyPrototypeTemplate {...args} />;

export const Currency = CurrencyPrototypeStory.bind({});
Currency.args = {};
