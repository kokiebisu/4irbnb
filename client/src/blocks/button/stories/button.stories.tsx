import React from 'react';

// Component
import { BaseButton } from '../button';

import { action } from '@storybook/addon-actions';
import { css } from 'styled-components';

export default {
  component: BaseButton,
  title: 'Button/Base',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: 'click',
};

const actionsData = {
  onPress: action('onPress'),
};

export const Small = () => {
  return (
    <BaseButton size='sm' styles={css``} {...buttonData} {...actionsData} />
  );
};
