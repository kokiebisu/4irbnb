export interface TransparentButtonTemplateProps {
  children?: any;
  inverse?: boolean;
}

/**
 * Renders the globe button component
 * @param {boolean} inverse - Whether if the globe button is styled in inverse
 */
export const TransparentButtonTemplate: React.FC<TransparentButtonTemplateProps> = ({
  children,
  inverse,
}) => {
  return (
    <div
      className={`${
        inverse
          ? 'hover:bg-gray-300 bg-opacity-40'
          : 'hover:bg-gray-300 bg-opacity-40'
      } rounded-full inline-flex items-center bg-transparent py-3 px-4`}
    >
      {children}
    </div>
  );
};
