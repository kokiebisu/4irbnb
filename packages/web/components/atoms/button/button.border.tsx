/**
 * Renders the border button props
 * @param {string} to - The link to which it redirects
 * @param {string} title - The title of the button
 * @param {boolean} inverse - Whether if the button takes an inverse styling
 * @param {string} size - The size of the button
 * @param {boolean} spread - Whether if the button takes full width of the parent
 */
const BorderButton: React.FC<{
  title?: string;
  inverse?: boolean;
  size?: 'sm' | 'md' | 'lg';
  spread?: boolean;
  bold?: boolean;
}> = ({ title, inverse, size = 'md', bold }) => {
  const renderBorder = () => {
    if (inverse && bold) {
      return 'border-2 border-white';
    }
    if (inverse) {
      return 'border border-white';
    }
    if (bold) {
      return 'border-2 border-white';
    }
    return 'border border-black';
  };

  const styles = {
    common: 'text-center rounded-lg whitespace-nowrap',
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-5',
    lg: 'text-lg py-4 px-6',
  };

  return (
    <div className={`${styles['common']} ${styles[size]} ${renderBorder()}`}>
      <h4 className={inverse ? 'text-white' : undefined}>{title}</h4>
    </div>
  );
};

export const border = (props) => {
  return {
    border: {
      component: <BorderButton {...props} />,
      style: '',
    },
  };
};
