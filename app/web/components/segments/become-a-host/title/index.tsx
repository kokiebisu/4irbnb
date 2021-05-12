import { useTitleSegment } from './logic';
import { TitleSegmentTemplate } from './template';

export const TitleSegment = () => {
  const data = useTitleSegment();
  return <TitleSegmentTemplate {...data} />;
};

export const title = (props) => {
  return {
    title: {
      component: <TitleSegment {...props} />,
    },
  };
};
