import React from 'react';

// Component
import { BaseButton } from '../button';

// element
import { Text } from '../../../elements/Text';

import { action } from '@storybook/addon-actions';
import { css } from 'styled-components';

export default {
  component: BaseButton,
  title: 'Button/Base',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: <Text>click</Text>,
};

const actionsData = {
  onPress: action('onPress'),
};

export const Small = () => {
  return <BaseButton sm {...buttonData} {...actionsData} />;
};
