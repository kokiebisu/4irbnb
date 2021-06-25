import { ActionIconTemplate, ActionIconTemplateProps } from './template';

export type ActionIconProps = ActionIconTemplateProps & {
  width: number;
  height: number;
};

export const ActionIcon = ({
  width,
  height,
  ...props
}: ActionIconProps): JSX.Element => {
  return (
    <div data-testid="action-icon" style={{ width, height }}>
      <ActionIconTemplate {...props} />
    </div>
  );
};

export type ActionTypeVariants =
  | 'heart'
  | 'close'
  | 'pause'
  | 'play'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'upload';
