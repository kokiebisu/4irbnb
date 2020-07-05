import React from 'react';

// Component
import { Button } from './button';
import { PrimaryButton } from './button.primary';

export default {
  title: 'Design System/Blocks/Buttons',
};

export const Base = () => {
  return <Button onPress={() => console.log('base')}>Base BUtton</Button>;
};

export const Primary = () => {
  return (
    <PrimaryButton onPress={() => console.log('primary')}>
      Primary Button
    </PrimaryButton>
  );
};
