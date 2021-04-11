import { $Icon, Icon } from '@icons';

export interface MenuButtonProps {
  authenticated?: boolean;
  data?: {
    imgUrl: string;
  };
  inverse?: boolean;
}

/**
 * Renders the menu button components
 * @param {boolean} inverse - Whether if the button takes the inverse styling or not
 */
export const MenuButton: React.FC<MenuButtonProps> = ({
  authenticated,
  data,
  inverse,
}) => {
  return (
    <div
      className={`flex items-center py-2 pl-3 pr-2 bg-white rounded-full ${
        inverse ? '' : 'border-2 border-gray-200'
      } `}
    >
      <div className="mr-3">
        <Icon
          variant={$Icon.GENERAL}
          generalType="bars"
          fill="black"
          width={12}
        />
      </div>
      <div>
        {authenticated && data ? (
          <img className="block rounded-lg w-14" src={data.imgUrl} />
        ) : (
          <Icon
            variant={$Icon.PROFILE}
            profileType="avatar"
            width={30}
            fill="gray"
          />
        )}
      </div>
    </div>
  );
};

export const menu = ({ ...props }) => {
  const { inverse } = props;
  return {
    menu: {
      component: <MenuButton {...props} />,
      style: inverse ? '' : 'hover:shadow-md rounded-full',
    },
  };
};
