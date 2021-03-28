import { Button, $Button } from '@button';

export const ClosedInput: React.FC<{
  title?: string;
  data?: any;
  selected?: true;
  value?: string;
  setData?: any;
}> = ({
  title = 'Title here',
  data = { value: false },
  selected = false,
  setData,
  value,
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
            onClick={() => setData({ ...data, [value]: false })}
            selected={data[value] === false}
          />
        </div>
        <div>
          <Button
            variant={$Button.CLOSED}
            content="check"
            onClick={() => setData({ ...data, [value]: true })}
            selected={data[value] === true}
          />
        </div>
      </div>
    </div>
  );
};
