import { stretchMixin } from '@button/utils/mixin';

export interface BorderButtonTemplateProps {
  title?: string;
  inverse?: boolean;
  size?: 'sm' | 'md' | 'lg';
  spread?: boolean;
  bold?: boolean;
  stretch?: boolean;
}

/**
 * Renders the border button props
 * @param {string} to - The link to which it redirects
 * @param {string} title - The title of the button
 * @param {boolean} inverse - Whether if the button takes an inverse styling
 * @param {string} size - The size of the button
 * @param {boolean} spread - Whether if the button takes full width of the parent
 */
export const BorderButtonTemplate: React.FC<BorderButtonTemplateProps> = ({
  title,
  inverse,
  size,
  bold,
  stretch,
}) => {
  const renderBorder = () => {
    if (inverse && bold) {
      return 'border-2 border-white';
    }
    if (inverse) {
      return 'border border-white';
    }
    if (bold) {
      return 'border-2 border-black';
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
    <div
      className={`${stretchMixin(stretch)} ${styles['common']} ${
        styles[size]
      } ${renderBorder()}`}
    >
      <h4 className={inverse ? 'text-white' : undefined}>{title}</h4>
    </div>
  );
};
