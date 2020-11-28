import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Create } from './create.component';
import { CreateProps } from './props';

export default {
  title: 'Design System/Organisms/Create',
  component: Create,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const CreateStories: Story<CreateProps> = (args) => <Create {...args} />;

export const getStarted = CreateStories.bind({});
getStarted.args = {
  type: 'getstarted',
};

export const kind = CreateStories.bind({});
kind.args = {
  type: 'kind'
}