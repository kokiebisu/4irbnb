import { motion } from 'framer-motion';
import { factory } from './utils/factory';

export const $Button = {
  AUTH: 'auth',
  MENU: 'menu',
  PRIVACY: 'privacy',
  BORDER: 'border',
  BAR: 'bar',
  BANNER: 'banner',
  PRIMARY: 'primary',
  PAGINATE: 'paginate',
  EXPAND: 'expand',
  OPTION: 'option',
  UNDERLINE: 'underline',
  FILTER: 'filter',
  MODAL: 'modal',
  BACK: 'back',
  TRANSPARENT: 'transparent',
  GLOBE: 'globe',
  LINK: 'link',
  CLOSED: 'closed',
  SEARCH: 'search',
  LOCATION: 'location',
  NEARBY: 'nearby',
  CALENDAR: 'calendar',
  SEARCHBAR: 'searchbar',
  LOGO: 'logo',
  VIDEO: 'video',
  DESTINATION: 'destination',
  CURRENCY: 'currency',
  VERIFY: 'verify',
};

export interface ButtonProps {
  extendsTo?: string;
  variant?: string;
  onClick?: () => void;
  block?: boolean;
  animate?: boolean;
  stretch?: boolean;
  [property: string]: any;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Button: React.FC<ButtonProps> = ({
  extendsTo = '',
  variant,
  children,
  onClick,
  to,
  block,
  animate,
  stretch,
  ...props
}) => {
  const { disable } = props;
  const variants: {
    [key: string]: {
      component: JSX.Element;
      style: string;
    };
  } = factory(props);

  const styleWidth = (stretch) => {
    return stretch ? 'w-full' : 'w-auto';
  };

  const styleDisplay = (block) => {
    return block ? 'block' : 'inline-block';
  };

  const styleDisable = (disable) => {
    return disable ? 'cursor-default' : 'cursor-pointer';
  };

  return (
    <motion.button
      whileTap={{ scale: disable || !animate ? 1 : 0.995 }}
      whileHover={{ scale: disable || !animate ? 1 : 1.005 }}
      data-testid={`${variant}-button`}
      className={`${variants[variant].style} ${extendsTo} ${styleWidth(
        stretch
      )} ${styleDisplay(block)} transition ${styleDisable(disable)}`}
      onClick={!disable ? onClick : undefined}
      disabled={disable}
    >
      {variant ? variants[variant].component : children}
    </motion.button>
  );
};
