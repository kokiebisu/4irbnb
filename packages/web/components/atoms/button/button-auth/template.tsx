export interface AuthButtonTemplateProps {
  authIcon?: JSX.Element;
  authName?: string;
}

/**
 * Renders the auth button component
 * @param {string} auth - Platform for the authentication
 */
export const AuthButtonTemplate: React.FC<AuthButtonTemplateProps> = ({
  authIcon,
  authName,
}) => {
  return (
    <div className="border-gray-300 border-solid border-2 hover:border-black bg-transparent block w-full px-4 py-3 rounded-lg">
      <div className="relative w-full flex justify-center">
        <div className="absolute left-0">{authIcon}</div>
        <div>
          <h3 className="text-sm text-gray-700">Continue with {authName}</h3>
        </div>
      </div>
    </div>
  );
};
