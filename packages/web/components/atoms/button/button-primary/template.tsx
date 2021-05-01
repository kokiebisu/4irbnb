import { Animation } from '@animation';
import { stretchMixin } from '@button/utils/mixin';

export interface PrimaryButtonTemplateProps {
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  fill?: string;
  color?: string;
  bg?: string;
  loading?: boolean;
  disable?: boolean;
  stretch?: boolean;
}

/**
 * Renders the primary button component
 * @param {string} title - Title of the button
 * @param {string} size - Size of the button
 * @param {string} fill - Any custom color you want to add
 * @param {boolean} loading - Show the loading animation if true
 * @param {boolean} disable - Shows gray appearance and disabled users from pressing
 */
export const PrimaryButtonTemplate: React.FC<PrimaryButtonTemplateProps> = ({
  title,
  size,
  fill,
  loading,
  disable,
  color,
  stretch,
}) => {
  const renderBackgroundColor = () => {
    if (disable) {
      return 'bg-gray-200';
    }
    return !fill && !disable && 'bg-primary';
  };

  const styles = {
    common: 'rounded-lg',
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-4 px-8',
    lg: 'text-base py-5 px-8',
  };

  return (
    <div
      style={{ backgroundColor: !disable && fill }}
      className={`text-center ${styles['common']} ${
        styles[size]
      } ${renderBackgroundColor()} ${stretchMixin(stretch)}`}
    >
      {loading ? (
        <div className="h-6 flex items-center justify-center">
          <Animation type="loading" />
        </div>
      ) : (
        <div>
          <h4 className={`h-6 text-${color}`}>{title}</h4>
        </div>
      )}
    </div>
  );
};
