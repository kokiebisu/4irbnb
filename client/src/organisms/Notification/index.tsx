import React from 'react';

import CookieNotification from 'organisms/Notification/notification.cookie';

export type NotificationProps = {
  type?: string;
};

interface mapProps {
  [key: string]: JSX.Element;
}

export const Notification = ({ type, ...props }: NotificationProps) => {
  if (!type) {
    return null;
  }
  const types: mapProps = {
    cookie: <CookieNotification {...props} />,
  };
  return types[type];
};
