import { ChevronRight } from '@svg/regular';

/**
 * Renders the expand button
 * @param {string} to - Redirects to the path being specified
 * @param {string} title - Title of the button
 */
const ExpandButton: React.FC<{ to?: string; title?: string }> = ({
  title = 'Button',
}) => {
  return (
    <div>
      <div className="flex items-center">
        <div>
          <u className="text-sm">{title}</u>
        </div>
        <div>
          <ChevronRight width={14} stroke="black" strokeWidth={5} />
        </div>
      </div>
    </div>
  );
};

export const expand = (props) => {
  return {
    expand: {
      component: <ExpandButton {...props} />,
      style: '',
    },
  };
};
