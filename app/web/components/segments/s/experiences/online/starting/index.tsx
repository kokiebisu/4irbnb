import { useStartingSegment } from './logic';
import { StartingSegmentTemplate } from './template';

export const StartingSegment = () => {
  const data = useStartingSegment();
  return <StartingSegmentTemplate {...data} />;
};

export const starting = (props) => {
  return {
    starting: {
      component: <StartingSegment {...props} />
    }
  }
}