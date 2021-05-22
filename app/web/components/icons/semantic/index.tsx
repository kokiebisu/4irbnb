import { SemanticIconTemplate, SemanticIconTemplateProps } from './template';

export type SemanticIconProps = SemanticIconTemplateProps;

export const SemanticIcon = (props: SemanticIconProps): JSX.Element => {
  return <SemanticIconTemplate {...props} />;
};
