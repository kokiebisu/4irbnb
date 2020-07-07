import React from 'react';

import { action } from '@storybook/addon-actions';

import SearchButton from '../button.search';

export default {
  component: SearchButton,
  title: 'Button/Search',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: 'click me',
};

const actionsData = {
  onPress: action('onPress'),
};

export const Small = () => {
  return <SearchButton size='sm' {...buttonData} {...actionsData} />;
};

export const Medium = () => {
  return <SearchButton size='md' {...buttonData} {...actionsData} />;
};

export const Large = () => {
  return <SearchButton size='lg' {...buttonData} {...actionsData} />;
};
