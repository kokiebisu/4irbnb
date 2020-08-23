import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { css } from 'styled-components';
import { Box } from 'atoms';
import { Notification } from 'organisms/Notification';

export default {
  title: 'Design Systems/Notification',
  component: Notification,
} as Meta;

interface Props {
  type: string;
  styles?: any;
}

const NotificationTemplate: Story<Props> = ({ styles, ...args }) => (
  <Box styles={styles}>
    <Notification {...args} />
  </Box>
);

export const cookie = NotificationTemplate.bind({});
cookie.args = {
  type: 'cookie',
  styles: css`
    width: calc(100% - 30px);
    margin: 0 auto;
  `,
};
