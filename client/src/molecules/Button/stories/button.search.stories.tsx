import React from 'react';
import { action } from '@storybook/addon-actions';

// block
import { Button } from '../button';

export default {
  title: 'Design Systems|Molecules/Button/Search',
  parameters: {
    component: Button,
    componentSubtitle:
      'Displays the search button used to look for a place to stay',
  },
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
