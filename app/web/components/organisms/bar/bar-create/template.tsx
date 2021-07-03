import { Button } from '@atoms';

export interface CreateBarTemplateProps {
  handleNextPage?: () => void;
  handlePreviousPage?: () => void;
  criteria?: boolean;
}

/**
 *
 * @param param0
 * @returns
 */
export const CreateBarTemplate: React.FC<CreateBarTemplateProps> = ({
  handleNextPage,
  handlePreviousPage,
  criteria,
}) => {
  return (
    <div className="w-full border-t border-gray-200 py-4">
      <div className="w-full flex items-center justify-between">
        <div>
          <Button variant="back" onClick={handlePreviousPage} />
        </div>
        <div>
          <Button
            variant="primary"
            title="Next"
            size="md"
            color="white"
            fill="#018489"
            disable={!criteria}
            onClick={handleNextPage}
          />
        </div>
      </div>
    </div>
  );
};
