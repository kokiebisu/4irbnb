import { Meta, Story } from '@storybook/react';
import { AnywhereCardTemplate, AnywhereCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: AnywhereCardTemplate,
} as Meta;

const CardStory: Story<AnywhereCardTemplateProps> = (args) => (
  <AnywhereCardTemplate {...args} />
);

export const Anywhere = CardStory.bind({});
Anywhere.args = {
  card: {
    type: 'Bedroom',
    beds: [{ type: 'double bed', count: 1 }],
  },
};
