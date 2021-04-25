import { Meta, Story } from '@storybook/react';
import { SetCardTemplate, SetCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: SetCardTemplate,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const CardStory: Story<SetCardTemplateProps> = (args) => (
  <SetCardTemplate {...args} />
);

export const Set = CardStory.bind({});
Set.args = {};
