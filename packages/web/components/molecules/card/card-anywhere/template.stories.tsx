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
  title: 'Title',
};
Anywhere.decorators = [
  (Story) => (
    <div style={{ maxWidth: 300 }}>
      <Story />
    </div>
  ),
];
