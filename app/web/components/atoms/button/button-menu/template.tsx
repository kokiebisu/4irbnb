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
      className="inline-block"
      onClick={onClick}
    >
      <div
        className={`${
          inverse ? "border-2 border-gray-200 hover:shadow-md" : ""
        } inline-flex items-center py-1 pl-2 pr-1 bg-white rounded-full`}
      >
        <div className="mr-3">
          <Icon
            variant="general"
            generalType="bars"
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
              variant="profile"
              profileType="avatar"
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
