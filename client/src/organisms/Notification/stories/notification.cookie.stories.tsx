import React from 'react';
import { css } from 'styled-components';

import { Box } from '../../../atoms/Box';
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
  const extend = {
    wrapper: css`
      width: calc(100% - 30px);
      position: fixed;
      bottom: 25px;
      margin: 0 auto;
    `,
  };
  return (
    <Box styles={extend.wrapper}>
      <Notification type='cookie' />
    </Box>
  );
};
