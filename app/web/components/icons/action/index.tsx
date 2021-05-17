import { BaseIconProps } from '@icons';
import { ActionIconTemplate, ActionIconTemplateProps } from './template';

export interface ActionIconProps extends ActionIconTemplateProps {
  variant: 'action';
}

export const ActionIcon: React.FC<BaseIconProps & ActionIconProps> = ({
  ...props
}) => {
  return <ActionIconTemplate {...props} />;
};
