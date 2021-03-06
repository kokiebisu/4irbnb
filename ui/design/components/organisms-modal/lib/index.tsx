/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import useOnClickOutside from '@nextbnb/design/hooks/useOnClickOutside';
import { useLockBodyScroll } from '@nextbnb/design/hooks/useLockBodyScroll';

import { $MODAL } from './constant/appearance';
import { generateVariants } from './utils/variants';
import { webVariants } from './web/variants';
import { PLATFORM } from './constant/platform';

export { $MODAL };

export interface ModalProps {
  variant: string;
  extendsTo?: any;
  dispatch?: any;
  animate?: string;
  lock?: boolean;
  criteria?: any;
  noPadding?: boolean;
  handleDispatch?: any;
  [property: string]: any;
}

/**
 * Bundles all the modal components
 * @param {string} variant - Variant of modal component
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} dispatchType - The type of dispatch
 */
export const Modal: React.FC<ModalProps> = ({
  platform = PLATFORM.web,
  variant = $MODAL.auth,
  extendsTo,
  dispatch,
  animate = 'default',
  lock = false,
  noPadding = false,
  handleDispatch,
  ...props
}) => {
  const { criteria } = props;
  const containerRef = useRef();

  const variants = generateVariants(platform, webVariants, props);

  if (lock) {
    useLockBodyScroll();
  }
  useOnClickOutside(containerRef, () =>
    handleDispatch({ type: `${dispatch}` })
  );

  const animation = {
    slideup: {
      initial: { y: 400, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    default: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.1, ease: 'easeInOut' },
    },
  };

  if (criteria !== undefined) {
    return (
      <AnimatePresence>
        {criteria && (
          <motion.div
            data-testid={`${variant}-modal`}
            exit={{ opacity: 0 }}
            initial={animation[animate].initial}
            animate={animation[animate].animate}
            transition={animation[animate].transition}
            ref={containerRef}
            css={{
              boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 12px',
              width: '100%',
              ...extendsTo,
            }}
            sx={{
              ...variants[variant].css,
              bg: 'white',
            }}
          >
            {variants[variant].component}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
  return (
    <div
      ref={containerRef}
      css={{
        ...extendsTo,
        boxShadow: 'rgba(8, 5, 5, 0.08) 0px 1px 12px',
      }}
      sx={{ ...variants[variant].css, bg: 'white' }}
      data-testid={`${variant}-modal`}
    >
      {variants[variant].component}
    </div>
  );
};
