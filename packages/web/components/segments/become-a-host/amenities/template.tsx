import { $Input, Input } from '@input';

export interface AmenitiesSegmentTemplateProps {
  amenities?: any;
  safeties?: any;
  handleCheckboxChange?: (type: string, item: string) => void;
}

export const AmenitiesSegmentTemplate: React.FC<AmenitiesSegmentTemplateProps> = ({
  amenities,
  safeties,
  handleCheckboxChange,
}) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-lg text-gray-500">What amenities do you offer?</h3>
      </div>
      <div className="mb-7">
        <p className="text-md text-gray-500">
          These are just the amenities guests usually expect, but you can add
          even more after publishing.
        </p>
      </div>
      <div className="mb-7">
        {amenities.map(({ title, item, description }, index) => {
          return (
            <div key={index} className="mb-4">
              <Input
                check={() => handleCheckboxChange('amenities', item)}
                checked={amenities.includes(item)}
                variant={$Input.CHECKBOX}
                title={title}
                description={description}
              />
            </div>
          );
        })}
      </div>
      <div className="mb-6">
        <div className="mb-8">
          <h3 className="text-lg text-gray-300">Safety amenities</h3>
        </div>
        {safeties.map(({ title, item, description }, index) => {
          return (
            <div key={index} className="mb-4">
              <Input
                check={() => handleCheckboxChange('safeties', item)}
                checked={safeties.includes(item)}
                variant={$Input.CHECKBOX}
                title={title}
                description={description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
