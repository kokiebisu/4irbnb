import { Icon } from '@icons';
import { useExperienceBulletContent } from './content';

export interface ExperienceBulletTemplateProps {
  experienceType?: string;
}

/**
 * Renders the experience bullet
 * @param {string} experience - Type of experience bullet
 */
export const ExperienceBulletTemplate: React.FC<ExperienceBulletTemplateProps> = ({
  experienceType,
}) => {
  const { icon, title, description } = useExperienceBulletContent({
    experienceType,
  });

  return (
    <div className="flex items-center">
      <div className="mr-4">
        <Icon {...icon} width={36} height={36} />
      </div>
      <div>
        <div>
          <h3 className="text-base">{title}</h3>
        </div>
        <div>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
