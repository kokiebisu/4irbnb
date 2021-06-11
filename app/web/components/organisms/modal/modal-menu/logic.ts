import { getOptionContents } from '@atoms/button-option/logic';

export const useMenuModal = () => {
  const options = getOptionContents();

  return {
    options,
  };
};
