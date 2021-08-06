import { Button } from "@atoms";

export interface CreateBarTemplateProps {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  criteria?: boolean;
}

/**
 *
 * @param param0
 * @returns
 */
export const CreateBarTemplate = ({
  handleNextPage,
  handlePreviousPage,
  criteria,
}: CreateBarTemplateProps): JSX.Element => {
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
            disabled={!criteria}
            onClick={handleNextPage}
          />
        </div>
      </div>
    </div>
  );
};
