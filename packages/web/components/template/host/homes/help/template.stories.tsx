import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  HelpTemplate,
  HelpTemplateProps,
} from '@template/host/homes/help/template';
import * as mockData from './mock';

export default {
  title: 'Templates/Host/Homes',
  component: HelpTemplate,
} as Meta;

const TemplateStory: Story<HelpTemplateProps> = (args) => (
  <HelpTemplate {...args} />
);

export const Help = TemplateStory.bind({});
Help.args = {
  ...mockData,
};
