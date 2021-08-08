import { Icon } from "@atoms";

export type MenuButtonTemplateProps = {
  authenticated: boolean;
  imgUrl?: string;
  inverse: boolean;
  onClick: () => void;
};

/**
 * Renders the menu button components
 * @param {boolean} inverse - Whether if the button takes the inverse styling or not
 */
export const MenuButtonTemplate = ({
  authenticated,
  imgUrl,
  inverse,
  onClick,
}: MenuButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="menu-button"
      className={`inline-block bg-white rounded-full ${
        inverse ? "" : "border border-solid border-gray-300 hover:shadow-md"
      } py-1 pl-2 pr-1`}
      onClick={onClick}
    >
      <div className={`inline-flex items-center`}>
        <div className=" pl-1 mr-3">
          <Icon
            variant="fill"
            fillType="bars"
            fill="black"
            width={12}
            height={12}
          />
        </div>
        <div>
          {authenticated && imgUrl ? (
            <img className="block rounded-full w-8 h-8" src={imgUrl} />
          ) : (
            <Icon
              variant="fill"
              fillType="avatar"
              width={30}
              height={30}
              fill="gray"
            />
          )}
        </div>
      </div>
    </button>
  );
};
