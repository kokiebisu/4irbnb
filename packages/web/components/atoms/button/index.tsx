import { motion } from 'framer-motion';
import { factory } from './utils/factory';

export interface ButtonProps {
  variant:
    | 'auth'
    | 'menu'
    | 'privacy'
    | 'border'
    | 'bar'
    | 'banner'
    | 'primary'
    | 'paginate'
    | 'expand'
    | 'option'
    | 'underline'
    | 'filter'
    | 'modal'
    | 'back'
    | 'transparent'
    | 'globe'
    | 'link'
    | 'closed'
    | 'search'
    | 'location'
    | 'nearby'
    | 'calendar'
    | 'searchbar'
    | 'logo'
    | 'video'
    | 'destination'
    | 'currency'
    | 'verify';
  extendsTo?: string;
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
