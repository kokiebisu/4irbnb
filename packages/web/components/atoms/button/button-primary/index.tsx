import layout from '@styles/layout.module.scss';

import { Animation } from '@animation';

export interface PrimaryButtonProps {
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  fill?: string;
  color?: string;
  bg?: string;
  loading?: boolean;
  disable?: boolean;
}

/**
 * Renders the primary button component
 * @param {string} title - Title of the button
 * @param {string} size - Size of the button
 * @param {string} fill - Any custom color you want to add
 * @param {boolean} loading - Show the loading animation if true
 * @param {boolean} disable - Shows gray appearance and disabled users from pressing
 */
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  size,
  fill,
  loading,
  disable,
  color,
}) => {
  const renderBackgroundColor = () => {
    if (disable) {
      return 'bg-gray-200';
    }
    return !fill && !disable && 'bg-primary';
  };

  const styles = {
    common: 'w-full rounded-lg',
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-4 px-8',
    lg: 'text-base py-5 px-8',
  };

  return (
    <div
      style={{ backgroundColor: !disable && fill }}
      className={`${styles['common']} ${
        styles[size]
      } ${renderBackgroundColor()}`}
    >
      {loading ? (
        <div>
          <Animation
            extendsTo={[
              layout['flex'],
              layout['items-center'],
              layout['justify-center'],
            ].join(' ')}
            type="loading"
          />
        </div>
      ) : (
        <h4 className={`text-${color}`}>{title}</h4>
      )}
    </div>
  );
};

export const primary = (props) => {
  return {
    primary: {
      component: <PrimaryButton {...props} />,
      style: '',
    },
  };
};
