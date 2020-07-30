import React from 'react';
import { action } from '@storybook/addon-actions';

// molecules
import { Button } from 'molecules/Button/button';

export default {
  title: 'Design Systems|Molecules/Button/Globe',
  parameters: {
    component: Button,
    componentSubtitle:
      'Displays the search button used to look for a place to stay',
  },
  excludeStories: /.*Data$/,
};

const actionsData = {
  onPress: action('onPress'),
};

export const base = () => {
  return <Button type='globe' {...actionsData} />;
};
