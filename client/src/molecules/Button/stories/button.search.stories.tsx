import React from 'react';
import { action } from '@storybook/addon-actions';

// block
import { Button } from '../button';

export default {
  component: Button,
  title: 'Blocks/Button/Search',
  excludeStories: /.*Data$/,
};

const data = {
  name: 'Search',
};

const actionsData = {
  onPress: action('onPress'),
};

export const base = () => {
  return <Button type='search' sm {...data} {...actionsData} />;
};
