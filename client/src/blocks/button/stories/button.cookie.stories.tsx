import React from 'react';
import { action } from '@storybook/addon-actions';

// block
import CookieButton from '../button.cookie';

export default {
  component: CookieButton,
  title: 'Button/Cookie',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: 'ok',
};

const actionsData = {
  onPress: action('onPress'),
};

export const base = () => <CookieButton {...buttonData} {...actionsData} />;
