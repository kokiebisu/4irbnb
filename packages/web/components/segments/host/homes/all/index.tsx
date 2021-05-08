import { useAllSegment } from './logic';
import { AllTemplate } from './template';

export const AllSegment = (props) => {
  const data = useAllSegment();
  return <AllTemplate {...data} {...props} />;
};

export const all = (props) => {
  return {
    all: {
      component: <AllSegment {...props} />,
    },
  };
};
