import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  HelpTemplate,
  HelpTemplateProps,
} from 'components/segments/host/homes/help/template';
import * as mockData from './mock';

export default {
  title: 'Templates/Host/Homes',
  component: HelpTemplate,
} as Meta;

const HelpTemplateStory: Story<HelpTemplateProps> = (args) => (
  <HelpTemplate {...args} />
);

export const Help = HelpTemplateStory.bind({});
Help.args = {
  ...mockData,
};
