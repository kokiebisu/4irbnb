import { Icon } from '@icons';
import { useExperienceBulletTemplate } from './use-template';

export type ExperienceBulletVariants = 'hosts' | 'activities' | 'global';
export interface ExperienceBulletTemplateProps {
  experienceType: ExperienceBulletVariants;
}

/**
 * Renders the experience bullet
 * @param {string} experience - Type of experience bullet
 */
export const ExperienceBulletTemplate = ({
  experienceType,
}: ExperienceBulletTemplateProps): JSX.Element => {
  const { icon, title, description } = useExperienceBulletTemplate({
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
