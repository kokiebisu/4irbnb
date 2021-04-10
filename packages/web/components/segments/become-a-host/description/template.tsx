import { Input, $Input } from '@input';

export interface DescriptionSegmentTemplate {
  data?: any;
  setData?: any;
}

export interface DescriptionSegmentTemplateProps {
  description?: string;
  handleTextareaChange?: (e: any, property: string) => void;
}

export const DescriptionSegmentTemplate: React.FC<DescriptionSegmentTemplateProps> = (
  description,
  handleTextareaChange
) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-3xl text-gray-500">
          Describe your place to guests
        </h3>
      </div>
      <div className="mb-7">
        <p className="text-sm text-gray-500">
          Mention the best features of your space, any special amenities like
          fast wifi or parking, and what you love about the neighbourhood.
        </p>
      </div>
      <div className="mb-6">
        <div className="mb-3">
          <Input
            variant={$Input.TEXTAREA}
            limit={500}
            value={description}
            handleChange={(e) => handleTextareaChange(e, 'description')}
          />
        </div>
      </div>
    </div>
  );
};
