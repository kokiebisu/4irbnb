import { usePreviewSegment } from './logic';
import { PreviewSegmentTemplate } from './template';

export const PreviewSegment = () => {
  const data = usePreviewSegment();
  return <PreviewSegmentTemplate {...data} />;
};

export const preview = (props) => {
  return {
    preview: {
      component: <PreviewSegment {...props} />,
    },
  };
};
