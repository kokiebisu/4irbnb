import { Icon } from '@icons';

export type MenuButtonTemplateProps = {
  authenticated: boolean;
  imgUrl: string;
  inverse: boolean;
};

/**
 * Renders the menu button components
 * @param {boolean} inverse - Whether if the button takes the inverse styling or not
 */
export const MenuButtonTemplate: React.FC<MenuButtonTemplateProps> = ({
  authenticated,
  imgUrl,
  inverse,
}) => {
  return (
    <div
      className={`${
        inverse ? 'border-2 border-gray-200 hover:shadow-md' : ''
      } inline-flex items-center py-2 pl-3 pr-2 bg-white rounded-full`}
    >
      <div className="mr-3">
        <Icon variant="general" generalType="bars" fill="black" width={12} />
      </div>
      <div>
        {authenticated && imgUrl ? (
          <img className="block rounded-full w-8 h-8" src={imgUrl} />
        ) : (
          <Icon variant="profile" profileType="avatar" width={30} fill="gray" />
        )}
      </div>
    </div>
  );
};
