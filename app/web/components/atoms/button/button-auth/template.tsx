export type AuthButtonTemplateProps = {
  icon: JSX.Element;
  disabled?: boolean;
  onClick: () => void;
  stretched?: boolean;
  name: string;
};

/**
 * Renders the auth button component
 * @param {string} auth - Platform for the authentication
 */
export const AuthButtonTemplate = ({
  icon,
  name,
  disabled,
  onClick,
  stretched,
}: AuthButtonTemplateProps): JSX.Element => {
  // const { icon } = useAuthButtonTemplate({ authType });
  return (
    <button
      className={`${stretched ? 'w-full block' : 'inline-block'}`}
      data-testid="auth-button"
      onClick={!disabled ? onClick : undefined}
    >
      <div className="border-gray-300 border-solid border-2 hover:border-black bg-transparent block w-full px-4 py-3 rounded-lg">
        <div className="relative w-full flex justify-between items-center">
          <div className="">{icon}</div>
          <div>
            <h3 className="text-sm text-gray-700 px-6">Continue with {name}</h3>
          </div>
          <div />
        </div>
      </div>
    </button>
  );
};
