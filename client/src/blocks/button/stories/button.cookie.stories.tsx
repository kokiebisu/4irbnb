import React from 'react';
import { action } from '@storybook/addon-actions';

// block
import CookieButton from '../button.cookie';

// element
import { Text } from '../../../elements/Text';

export default {
  component: CookieButton,
  title: 'Button/Cookie',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: <Text>OK</Text>,
};

const actionsData = {
  onPress: action('onPress'),
};

export const base = () => <CookieButton {...buttonData} {...actionsData} />;

export const inverse = () => (
  <CookieButton inverse {...buttonData} {...actionsData} />
);
