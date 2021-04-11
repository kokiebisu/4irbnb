import { Button, $Button } from '@button';

export interface ClosedInputProps {
  title?: string;
  flag?: boolean;
  onClickSwitchToFalse?: () => void;
  onClickSwitchToTrue?: () => void;
}

export const ClosedInput: React.FC<ClosedInputProps> = ({
  title,
  flag,
  onClickSwitchToFalse,
  onClickSwitchToTrue,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm">{title}</h4>
      </div>
      <div className="flex">
        <div className="mr-3">
          <Button
            variant={$Button.CLOSED}
            content="close"
            onClick={onClickSwitchToFalse}
            selected={flag === false}
          />
        </div>
        <div>
          <Button
            variant={$Button.CLOSED}
            content="check"
            onClick={onClickSwitchToTrue}
            selected={flag === true}
          />
        </div>
      </div>
    </div>
  );
};
