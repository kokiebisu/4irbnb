import React from 'react';
import { action } from '@storybook/addon-actions';
import { css } from 'styled-components';

// block
import { Box } from '../../../atoms/Box';
import { Button } from '../button';

export default {
  title: 'Design Systems|Molecules/Button/Cookie',
  parameters: {
    component: Button,
    componentSubtitle:
      'Displays the two types of cookie buttons used for the landing popup notifications',
  },
  excludeStories: /.*Data$/,
};

const normalData = {
  name: 'OK',
};

const inverseData = {
  name: 'Cookie Preferences',
};

const actionsData = {
  onPress: action('onPress'),
};

export const base = () => {
  const extend = {
    wrapper: css`
      width: 150px;
    `,
  };
  return (
    <Box styles={extend.wrapper}>
      <Button type='cookie' {...normalData} {...actionsData} />
    </Box>
  );
};

export const inverse = () => {
  const extend = {
    wrapper: css`
      width: 150px;
    `,
  };
  return (
    <Box styles={extend.wrapper}>
      <Button type='cookie' inverse {...inverseData} {...actionsData} />
    </Box>
  );
};
