import React from 'react';
import { action } from '@storybook/addon-actions';

// molecules
import { CustomButton } from 'molecules/Button';

export default {
  title: 'Design Systems|Molecules/Button/Search',
  parameters: {
    component: CustomButton,
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
  return <CustomButton type='search' sm {...data} {...actionsData} />;
};
