import { Input } from "@atoms";

export interface AmenitiesSegmentTemplateProps {
  amenities: { title: string; item: string; description?: string }[];
  safeties: { title: string; item: string; description?: string }[];
  selectedAmenities: string[];
  handleCheckboxChange: (type: string, item: string) => void;
}

export const AmenitiesSegmentTemplate: React.FC<AmenitiesSegmentTemplateProps> = ({
  amenities,
  selectedAmenities,
  safeties,
  handleCheckboxChange,
}) => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-xl text-gray-700">What amenities do you offer?</h3>
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
                onChange={() => handleCheckboxChange("amenities", item)}
                value={selectedAmenities.includes(item)}
                variant="checkbox"
                title={title}
                description={description}
              />
            </div>
          );
        })}
      </div>
      <div className="mb-6">
        <div className="mb-8">
          <h3 className="text-lg text-gray-700">Safety amenities</h3>
        </div>
        {safeties.map(({ title, item, description }, index) => {
          return (
            <div key={index} className="mb-4">
              <Input
                onChange={() => handleCheckboxChange("safeties", item)}
                value={false}
                variant="checkbox"
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
