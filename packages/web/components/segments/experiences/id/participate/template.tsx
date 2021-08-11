// import { Card } from "@card";

export interface ParticipateSegmentTemplateProps {
  participatingMethods: string[];
}

/**
 * Renders the participate section
 * @param {string[]} participates - Ways to participate
 */
export const ParticipateSegmentTemplate: React.FC<ParticipateSegmentTemplateProps> = (
  {
    // participatingMethods,
  }
) => {
  return (
    <div>
      <div>
        <h3 className="font-medium mb-4 text-gray-800 text-lg">
          How to participate
        </h3>
      </div>
      <div className="flex mb-5">
        {/* {participatingMethods.map((participate, index) => {
          return (
            <div key={index} className="mr-4">
              <Card variant="participate" categoryType={participate} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
