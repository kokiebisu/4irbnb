import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  LanguagePrototypeTemplate,
  LanguagePrototypeTemplateProps,
} from './template';

export default {
  title: 'Prototypes/Language',
  component: LanguagePrototypeTemplate,
} as Meta;

const LanguagePrototypeStory: Story<LanguagePrototypeTemplateProps> = (
  args
) => <LanguagePrototypeTemplate {...args} />;

export const Language = LanguagePrototypeStory.bind({});
Language.args = {};
