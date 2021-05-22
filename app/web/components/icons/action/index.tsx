import { ActionIconTemplate, ActionIconTemplateProps } from './template';

export type ActionIconProps = ActionIconTemplateProps;

export const ActionIcon = ({ ...props }: ActionIconProps): JSX.Element => {
  return <ActionIconTemplate {...props} />;
};
