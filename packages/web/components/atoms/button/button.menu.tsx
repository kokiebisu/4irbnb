import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';
import shape from '@styles/shape.module.scss';
import color from '@styles/color.module.scss';
import animation from '@styles/animation.module.scss';

import { Avatar, Bars } from '@svg/original';

/**
 * Renders the menu button components
 * @param {boolean} inverse - Whether if the button takes the inverse styling or not
 */
export const MenuButton: React.FC<{
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
  inverse = false,
}) => {
  return (
    <div
      className={`${
        inverse
          ? 'border-2 border-gray-100 hover:shadow-sm'
          : 'border-2 border-gray-100'
      } flex items-center py-2 pl-3 pr-2 bg-white rounded-lg`}
    >
      <div className="mr-3">
        <Bars fill="black" width={12} />
      </div>
      <div>
        {authenticated && data ? (
          <img className="block rounded-lg w-14" src={data.imgUrl} />
        ) : (
          <Avatar width={30} fill="gray" />
        )}
      </div>
    </div>
  );
};
