import React from 'react';
import { SearchBar } from '../searchbar';

export default {
  component: SearchBar,
  title: 'Blocks/SearchBar/Normal',
  excludeStories: /.*Data$/,
};

export const Base = () => {
  return <SearchBar type='normal' onPress={() => console.log('hello!')} />;
};
