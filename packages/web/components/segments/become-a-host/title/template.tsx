import { Input, $Input } from '@input';

export interface TitleSegmentTemplateProps {
  title?: string;
  handleChange?: (e: any, property: string) => void;
}

/**
 * Renders the /become-a-host/title
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const TitleSegmentTemplate: React.FC<TitleSegmentTemplateProps> = ({
  title,
  handleChange,
}) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-xl text-gray-700">
          Create a title for your listing
        </h3>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Catch guests' attention with a listing title that highlights what
          makes your place special.
        </p>
      </div>
      <div className="mb-6">
        <div className="mb-3">
          <Input
            variant={$Input.LIMIT}
            limit={50}
            value={title}
            handleChange={(e) => handleChange(e, 'title')}
          />
        </div>
      </div>
    </div>
  );
};
