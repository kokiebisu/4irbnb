import React from 'react';
import { Notification } from '../notification';

export default {
  title: 'Design Systems|Organisms/Notification/Cookie',
  parameters: {
    component: Notification,
    componentSubtitle: 'Displays the cookie notification for the user',
  },
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Notification type='cookie' />;
};
