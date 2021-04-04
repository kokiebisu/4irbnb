import { Bars } from '@svg/original';
import { $Icon, Icon } from '@icons';

/**
 * Renders the menu button components
 * @param {boolean} inverse - Whether if the button takes the inverse styling or not
 */
const MenuButton: React.FC<{
  authenticated?: boolean;
  data?: {
    imgUrl: string;
  };
  inverse?: boolean;
}> = ({
  authenticated = false,
  data = {
    imgUrl:
      'https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fGZhY2V8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60',
  },
  inverse,
}) => {
  return (
    <div
      className={`flex items-center py-2 pl-3 pr-2 bg-white rounded-full ${
        inverse ? '' : 'border-2 border-gray-200'
      } `}
    >
      <div className="mr-3">
        <Bars fill="black" width={12} />
      </div>
      <div>
        {authenticated && data ? (
          <img className="block rounded-lg w-14" src={data.imgUrl} />
        ) : (
          <Icon variant={$Icon.PROFILE} type="avatar" width={30} fill="gray" />
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
