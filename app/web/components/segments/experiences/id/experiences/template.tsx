import { Bullet } from '@bullet';

export interface ExperiencesSegmentTemplateProps {
  experiences?: string[];
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
        {experiences.map(
          (experience: 'hosts' | 'activities' | 'global', index) => {
            return (
              <div key={index}>
                <Bullet variant="experience" experienceType={experience} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
