import {
  LoadingAnimationTemplate,
  LoadingAnimationTemplateProps,
} from './template';

export interface LoadingAnimationProps extends LoadingAnimationTemplateProps {}

export const LoadingAnimation: React.FC<LoadingAnimationTemplateProps> = (
  props
) => {
  return <LoadingAnimationTemplate {...props} />;
};

export const loading = (props: any) => {
  return {
    loading: {
      component: <LoadingAnimation {...props} />,
    },
  };
};
