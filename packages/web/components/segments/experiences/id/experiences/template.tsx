import { Bullet } from "@atoms";

export interface ExperiencesSegmentTemplateProps {
  experiences: {
    icon: { experienceType: any };
    title: string;
    description: string;
  }[];
}

/**
 * Renders the experiences section
 */
export const ExperiencesSegmentTemplate: React.FC<ExperiencesSegmentTemplateProps> = ({
  experiences,
}) => {
  return (
    <div className="my-5">
      <div className="mb-5">
        <h3 className="text-xl">Airbnb Online Experiences</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {experiences.map(({ title, description }, index) => {
          return (
            <div key={index}>
              <Bullet
                variant="secondary"
                icon={<div></div>}
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
