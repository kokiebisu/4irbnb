import { BaseIconProps } from '@icons';
import { ActionIconTemplate, ActionIconTemplateProps } from './template';

export type ActionIconProps = BaseIconProps & ActionIconTemplateProps;

export const ActionIcon: React.FC<ActionIconProps> = ({ ...props }) => {
  return <ActionIconTemplate {...props} />;
};
