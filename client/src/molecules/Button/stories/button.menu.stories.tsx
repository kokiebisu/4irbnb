import React from 'react';
import { css } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Box } from 'atoms';
import { CustomButton } from 'molecules/Button';

export default {
  title: 'Design Systems|Molecules/Button/Menu',
  parameters: {
    component: CustomButton,
    componentSubtitle: 'Displays the menu button',
  },
  excludeStories: /.*Data$/,
};

const actionsData = {
  onPress: action('onPress'),
};

export const base = () => {
  const extend = {
    wrapper: css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  };
  return (
    <Box styles={extend.wrapper}>
      <CustomButton type='menu' {...actionsData} />
    </Box>
  );
};
