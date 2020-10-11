import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Footer, FooterProps } from './footer.component';

export default {
  title: 'Design System/Organisms/Footer',
  component: Footer,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const FooterTemplate: Story<FooterProps> = (args) => <Footer {...args} />;

export const basic = FooterTemplate.bind({});
basic.args = {};
