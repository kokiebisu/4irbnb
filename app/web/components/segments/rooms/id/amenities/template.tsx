import { Bullet, Icon } from "@atoms";
import { Button } from "@atoms";

export type AmenitiesSegmentTemplateProps = {
  title: string;
  amenities: { icon: any; description: string }[];
};

/**
 * Renders the amenity section
 * @param {string} title - Title of the section
 * @param {Object[]} amenities - List of amenities
 */
export const AmenitiesSegmentTemplate = ({
  title,
  amenities,
}: AmenitiesSegmentTemplateProps): JSX.Element => {
  return (
    <div>
      <div>
        <h3 className="font-medium mb-5 text-gray-700 text-2xl">{title}</h3>
      </div>
      <div
        className={`mb-5 ${[section["display__amenities--wrapper"]].join(" ")}`}
      >
        {amenities.map(({ icon, description }, index) => {
          return (
            <Bullet
              variant="primary"
              key={index}
              icon={
                <Icon
                  variant="fill"
                  fillType={icon.amenityType}
                  width={24}
                  height={24}
                  fill="black"
                />
              }
              title={description}
            />
          );
        })}
      </div>
      <div style={{ width: 300 }} className="mt-3 mb-3">
        <Button
          onClick={() => alert("clicked")}
          variant="border"
          size="md"
          title="Show all 40 amenities"
        />
      </div>
    </div>
  );
};
