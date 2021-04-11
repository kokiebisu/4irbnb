export interface PrivacyButtonProps {
  title?: string;
  inverse?: boolean;
}

/**
 * Renders the privacy button component
 * @param {string} title - Title of the button
 * @param {boolean} inverse - Whether if the button takes the inverse style or not
 */
export const PrivacyButton: React.FC<PrivacyButtonProps> = ({
  title,
  inverse,
}) => {
  return (
    <div
      className={`block sm:flex whitespace-nowrap py-3 px-6 font-medium rounded-md w-full text-sm justify-center ${
        inverse
          ? 'bg-gray-900 border-transparent border'
          : 'bg-transparent border border-black'
      }`}
    >
      <h4 className={`${inverse ? 'text-white' : 'text-black'} font-medium`}>
        {title}
      </h4>
    </div>
  );
};

export const privacy = (props) => {
  return {
    privacy: {
      component: <PrivacyButton {...props} />,
      style: '',
    },
  };
};
