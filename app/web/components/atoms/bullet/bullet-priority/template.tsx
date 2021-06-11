import { Icon } from '@atoms';
import { Button } from '@button';
import { usePriorityBulletTemplate } from './use-template';

export type PriorityTypeBulletVariants =
  | 'protection'
  | 'guidance'
  | 'requirements';
export type PriorityBulletTemplateProps = {
  priorityType: PriorityTypeBulletVariants;
  onClick: () => void;
};

/**
 * Renders the priority bullet
 * @param {string} priority - Type of priority bullet
 */
export const PriorityBulletTemplate = ({
  priorityType,
  onClick,
}: PriorityBulletTemplateProps): JSX.Element => {
  const { icon, title, description, link } = usePriorityBulletTemplate({
    priorityType,
  });
  return (
    <div>
      <div>
        <Icon {...icon} width={40} height={40} />
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
