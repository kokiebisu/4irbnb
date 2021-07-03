import { Story, Meta } from '@storybook/react';
import {
  CurrencyButtonTemplate,
  CurrencyButtonTemplateProps,
} from './template';

export default {
  title: 'Atoms/Button',
  component: CurrencyButtonTemplate,
} as Meta;

const ButtonStory: Story<CurrencyButtonTemplateProps> = (args) => (
  <CurrencyButtonTemplate {...args} />
);

export const Currency = ButtonStory.bind({});
Currency.args = {
  name: 'Canadian Dollar',
  abbreviation: 'CAD',
  symbol: '$',
};
