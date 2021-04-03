import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Footer, FooterProps } from '@footer';

export default {
  title: 'Organisms',
  component: Footer,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const FooterStory: Story<FooterProps> = (args) => <Footer {...args} />;

export const footer = FooterStory.bind({});
footer.args = {};
