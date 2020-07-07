import React from 'react';
import { action } from '@storybook/addon-actions';

// block
import SearchButton from '../button.search';

export default {
  component: SearchButton,
  title: 'Button/Search',
  excludeStories: /.*Data$/,
};

const data = {
  title: 'Search',
};

const actionsData = {
  onPress: action('onPress'),
};

export const base = () => {
  return <SearchButton sm {...data} {...actionsData} />;
};
