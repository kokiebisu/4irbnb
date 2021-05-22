import { Icon } from '@icons';
import { useOnlinehostBulletTemplate } from './use-template';

export type OnlinehostTypeVariants =
  | 'home'
  | 'global'
  | 'business'
  | 'resources'
  | 'events'
  | 'community';
export type OnlineHostBulletTemplateProps = {
  onlinehostType: OnlinehostTypeVariants;
};

export const OnlineHostBulletTemplate = ({
  onlinehostType,
}: OnlineHostBulletTemplateProps): JSX.Element => {
  const { icon, title, description } = useOnlinehostBulletTemplate({
    onlinehostType,
  });
  return (
    <div>
      <div>
        {icon.type === 'component' ? <Icon {...icon} /> : <img {...icon} />}
      </div>
      <div className="my-4">
        <h3>{title}</h3>
      </div>
      <div className="text-sm">
        <p>{description}</p>
      </div>
    </div>
  );
};
