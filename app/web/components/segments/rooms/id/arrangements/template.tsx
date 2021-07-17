import { Card } from "@card";

export interface ArrangementsSegmentTemplateProps {
  title: string;
  arrangements: { type: string; beds: { type: string; count: number }[] }[];
}

/**
 * Renders the arrangement section
 * @param {string} title - Title of the section
 * @param {Object[]} arrangements - List of amenities
 */
export const ArrangementsSegmentTemplate: React.FC<ArrangementsSegmentTemplateProps> = ({
  title,
  arrangements,
}) => {
  return (
    <div>
      <div>
        <h3 className="font-medium mb-5 text-gray-700 text-2xl">{title}</h3>
      </div>
      <div style={{ marginLeft: -8, marginRight: -8 }}>
        <div className="flex mx-2">
          {arrangements.map((arrangement, index) => {
            return (
              <div key={index} className="mr-3">
                <Card variant="arrangements" card={arrangement} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
