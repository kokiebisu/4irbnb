import { Card } from "@card";

export type HomesSegmentTemplateProps = {
  filterCount: number;
  place: string;
  guests: number;
  average: number;
  stays: {
    images: string[];
    typeStay: string;
    location: string;
    title: string;
    accomodations: {
      guests: number;
      bedroom: number;
      beds: number;
      bath: number;
    };
    characteristics: string[];
    ratings: number;
    reviews: number;
  }[];
  title: string;
  layout: "vertical" | "horizontal";
};

/**
 * Renders the HomesSegment section
 * @param {string} layout - Layout of how to list the items
 * @param {string} title - Title of the section
 * @param {Object[]} stays - List of objects containing the stays
 */
export const HomesSegmentTemplate: React.FC<HomesSegmentTemplateProps> = ({
  // layout,
  title,
  stays,
}) => {
  const layouts = {
    vertical: (
      <div className={title ? "mt-8" : "mt-4"}>
        {title && (
          <div>
            <h3 className="text-2xl">{title}</h3>
          </div>
        )}
        <div>
          {stays.map((stay, index) => {
            return (
              <div key={index}>
                <Card variant="stay" {...stay} />
              </div>
            );
          })}
        </div>
      </div>
    ),
  };

  return layouts.vertical;
};
