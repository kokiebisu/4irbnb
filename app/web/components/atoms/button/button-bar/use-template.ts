import { useState } from 'react';

export type BarTypeVariants = 'menu' | 'saved' | 'login';

export const useBarButtonTemplate = () => {
  const [selected, setSelected] = useState(false);

  const switchColor = () => setSelected((selected) => !selected);

  return { switchColor, selected };
};
