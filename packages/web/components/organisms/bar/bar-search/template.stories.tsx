import { Meta, Story } from '@storybook/react';
import { SearchBarTemplate, SearchBarTemplateProps } from './template';

export default {
  title: 'Organisms/Bar',
  component: SearchBarTemplate,
} as Meta;

const BarStory: Story<SearchBarTemplateProps> = (args) => (
  <SearchBarTemplate {...args} />
);

export const Search = BarStory.bind({});
Search.args = {
  type: 'stay',
  selected: null,
  setSelected: () => console.log('clicked'),
};
