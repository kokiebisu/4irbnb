import { loading } from '../animation-loading';

export const factory = (props: any) => {
  return {
    ...loading(props),
  } as {
    [variant: string]: {
      component: JSX.Element;
    };
  };
};
