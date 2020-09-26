import React from 'react';

import { CookieNotification } from 'organisms/Notification/notification.cookie';

export type NotificationProps = {
  type?: string;
};

interface mapProps {
  [key: string]: JSX.Element;
}

interface Props {
  type: string;
}

export const Notification: React.FC<Props> = ({ type, ...props }) => {
  if (!type) {
    return null;
  }
  const types: mapProps = {
    cookie: <CookieNotification {...props} />,
  };
  return types[type];
};
