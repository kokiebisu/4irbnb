import { Button } from '@atoms';

export type ClosedInputTemplateProps = {
  title: string;
  flag: boolean;
  onSwitchToFalse: () => void;
  onSwitchToTrue: () => void;
};

export const ClosedInputTemplate = ({
  title,
  flag,
  onSwitchToFalse,
  onSwitchToTrue,
}: ClosedInputTemplateProps): JSX.Element => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm">{title}</h4>
      </div>
      <div className="flex">
        <div className="mr-3">
          <Button
            variant="closed"
            icon={{
              variant: 'action',
              actionType: 'close',
              width: 16,
              height: 16,
            }}
            onClick={onSwitchToFalse}
            selected={!flag}
          />
        </div>
        <div>
          <Button
            variant="closed"
            icon={{
              variant: 'semantic',
              semanticType: 'check',
              width: 16,
              height: 16,
            }}
            onClick={onSwitchToTrue}
            selected={!!flag}
          />
        </div>
      </div>
    </div>
  );
};
