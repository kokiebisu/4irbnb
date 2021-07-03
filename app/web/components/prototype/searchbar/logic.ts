import { useToggleState } from '@context/toggle';
import { useState } from 'react';

export type useSearchbarProps = () => {
  contents?: any;
  toggleState?: any;
  handleSelectedChange?: any;
  selected?: any;
};

export const useSearchbar: useSearchbarProps = () => {
  const toggleState = useToggleState();
  const [selected, setSelected] = useState(null);

  const contents = {
    location: {
      styles: {
        left: 0,
        maxWidth: 400,
      },
    },
    checkin: {
      styles: {
        left: 0,
        maxWidth: 780,
      },
    },
    checkout: {
      styles: {
        left: 0,
        maxWidth: 780,
      },
    },
    guests: {
      styles: {
        right: 0,
        maxWidth: 325,
        display: 'flex',
        justifyContent: 'flex-end',
      },
    },
  };

  const handleSelectedChange = (value) => setSelected(value);

  return {
    contents,
    toggleState,
    handleSelectedChange,
    selected,
  };
};
