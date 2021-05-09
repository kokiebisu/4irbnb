import { loading } from '../animation-loading';

export const factory = (props: any) => {
  return {
    ...loading(props),
  };
};
