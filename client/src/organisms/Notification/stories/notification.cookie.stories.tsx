import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { css } from 'styled-components';
import { Box } from 'atoms';
import { Notification } from 'organisms/Notification';
import { cookieNotificationStyles } from 'organisms/Notification/styles/notification.cookie.styles';

export default {
  title: 'Design System/Notification',
  component: Notification,
} as Meta;

interface Props {
  type: string;
  styles?: any;
}

const NotificationTemplate: Story<Props> = ({ ...args }) => (
  <Notification {...args} />
);

export const cookie = NotificationTemplate.bind({});
cookie.args = {
  styles: cookieNotificationStyles,
  type: 'cookie',
};
