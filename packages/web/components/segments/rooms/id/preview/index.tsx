import { usePreview } from './logic';
import { PreviewTemplate } from './template';

export const Preview = () => {
  const data = usePreview();
  return <PreviewTemplate {...data} />;
};
