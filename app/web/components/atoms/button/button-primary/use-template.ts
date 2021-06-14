export const usePrimaryButtonTemplate = ({
  size,
  fill,
  disabled,
}: {
  size: 'sm' | 'md' | 'lg';
  fill: string;
  disabled?: boolean;
}): {
  bgColor: string;
  commonStyle: string;
  sizeStyle: string;
} => {
  const renderBackgroundColor = () => {
    if (disabled) {
      return 'bg-gray-200';
    }
    if (fill) {
      return fill;
    }
    return 'bg-primary';
  };

  const styles = {
    common: 'rounded-lg',
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-4 px-8',
    lg: 'text-base py-5 px-8',
  };

  return {
    bgColor: renderBackgroundColor(),
    commonStyle: styles['common'],
    sizeStyle: styles[size],
  };
};
