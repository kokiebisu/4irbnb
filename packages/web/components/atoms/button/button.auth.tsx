/**
 * Renders the auth button component
 * @param {string} auth - Platform for the authentication
 */
const AuthButton: React.FC<{ icon?: any; name?: string }> = ({
  icon,
  name = 'Email',
}) => {
  return (
    <div className="relative top-0 bottom-0 left-0 right-0">
      <div className="absolute left-0">{icon}</div>
      <div>
        <h3 className="text-sm text-gray-700">Continue with {name}</h3>
      </div>
    </div>
  );
};

export const auth = (props) => {
  return {
    auth: {
      component: <AuthButton {...props} />,
      style: '',
    },
  };
};
