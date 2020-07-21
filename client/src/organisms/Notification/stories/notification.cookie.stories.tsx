import React from 'react';
import { CookieNotification } from './notification.cookie.stories';

export default {
  title: 'Design Systems|Organisms/Notification/Cookie',
  parameters: {
    component: CookieNotification,
    componentSubtitle: 'Displays the cookie notification for the user',
  },
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <CookieNotification />;
};
