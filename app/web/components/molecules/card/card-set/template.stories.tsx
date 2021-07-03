import { Meta, Story } from '@storybook/react';
import { SetCardTemplate, SetCardTemplateProps } from './template';

export default {
  title: 'Molecules/Card',
  component: SetCardTemplate,
} as Meta;

const CardStory: Story<SetCardTemplateProps> = (args) => (
  <SetCardTemplate {...args} />
);

export const Set = CardStory.bind({});
Set.args = {};
