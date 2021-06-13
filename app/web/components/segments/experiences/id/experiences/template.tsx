import { Bullet, ExperienceIconTypes } from '@atoms';

export interface ExperiencesSegmentTemplateProps {
  experiences: {
    icon: { experienceType: ExperienceIconTypes };
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
        {experiences.map(({ icon, title, description }, index) => {
          return (
            <div key={index}>
              <Bullet
                variant="secondary"
                experienceType={icon}
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
