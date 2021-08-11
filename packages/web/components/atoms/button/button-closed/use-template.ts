import { useState } from 'react';

export type ClosedTypeVariants = 'close' | 'check';

export const useClosedButtonTemplate = () => {
  const [selected, setSelected] = useState(false);
  const toggleButtonColor = () => setSelected((selected) => !selected);
  return { toggleButtonColor, selected };
};
