import { usePreviewSegment } from './logic';
import {
  PreviewSegmentTemplate,
  PreviewSegmentTemplateProps,
} from './template';

export interface PreviewSegmentProps extends PreviewSegmentTemplateProps {}

export const PreviewSegment: React.FC<PreviewSegmentProps> = () => {
  const data = usePreviewSegment();
  return <PreviewSegmentTemplate {...data} />;
};

export const preview = (props: PreviewSegmentProps) => {
  return {
    preview: {
      component: <PreviewSegment {...props} />,
    },
  };
};
