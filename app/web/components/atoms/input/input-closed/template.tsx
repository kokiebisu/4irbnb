import { Button } from '@atoms';

export interface ClosedInputTemplateProps {
  title?: string;
  flag?: boolean;
  onSwitchToFalse?: () => void;
  onSwitchToTrue?: () => void;
}

export const ClosedInputTemplate: React.FC<ClosedInputTemplateProps> = ({
  title,
  flag,
  onSwitchToFalse,
  onSwitchToTrue,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm">{title}</h4>
      </div>
      <div className="flex">
        <div className="mr-3">
          <Button
            variant="closed"
            closedType="close"
            onClick={onSwitchToFalse}
            selected={flag === false}
          />
        </div>
        <div>
          <Button
            variant="closed"
            closedType="check"
            onClick={onSwitchToTrue}
            selected={flag === true}
          />
        </div>
      </div>
    </div>
  );
};
