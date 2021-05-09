import { Icon } from '@icons';
import { Button } from '@button';
import { usePriorityBulletContent } from './content';

export interface PriorityBulletTemplateProps {
  priorityType?: 'protection' | 'guidance' | 'requirements';
  onClick?: () => void;
}

/**
 * Renders the priority bullet
 * @param {string} priority - Type of priority bullet
 */
export const PriorityBulletTemplate: React.FC<PriorityBulletTemplateProps> = ({
  priorityType,
  onClick,
}) => {
  const { icon, title, description, link } = usePriorityBulletContent({
    priorityType,
  });
  return (
    <div>
      <div>
        <Icon {...icon} width={40} />
      </div>
      <div className="my-4">
        <h3 className="font-2xl">{title}</h3>
      </div>
      <div className="mb-8">
        <p>{description}</p>
      </div>
      <div>
        <Button title={link} variant="underline" onClick={onClick} />
      </div>
    </div>
  );
};
