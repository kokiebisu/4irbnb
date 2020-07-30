import React from 'react';
import { css } from 'styled-components';

// atoms
import { Box } from 'atoms';

// organisms
import { Notification } from 'organisms/Notification';

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
