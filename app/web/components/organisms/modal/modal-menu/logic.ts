import { getOptionContents } from '@button/button-option/logic';

export const useMenuModal = () => {
  const options = getOptionContents();

  return {
    options,
  };
};
