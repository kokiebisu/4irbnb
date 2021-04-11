import { Button } from '@button';

/**
 *
 * @param param0
 * @returns
 */
export const CreateBar: React.FC<{
  next?: () => void;
  back?: () => void;
  criteria?: boolean;
}> = ({
  next = () => alert('next button pressed'),
  back = () => alert('back button pressed'),
  criteria = true,
}) => {
  return (
    <div className="w-full border-t border-gray-200 py-4">
      <div className="w-full flex items-center justify-between">
        <div>
          <Button variant="back" onClick={back} />
        </div>
        <div>
          <Button
            variant="primary"
            title="Next"
            size="md"
            fill="#018489"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};
