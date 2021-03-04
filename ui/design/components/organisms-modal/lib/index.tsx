/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import useOnClickOutside from '@nextbnb/design/hooks/useOnClickOutside';
import { useLockBodyScroll } from '@nextbnb/design/hooks/useLockBodyScroll';

import { menu } from './web/modal.menu';
import { privacy } from './web/modal.privacy';
import { auth } from './web/modal.auth';
import { booking } from './web/modal.booking';
import { globe } from './web/modal.globe';
import { location } from './web/modal.location';
import { guests } from './web/modal.guests';
import { checkin, checkout } from './web/modal.check';
import { listing } from './web/modal.listing';
import { $MODAL } from './constant/appearance';

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

  const variants: {
    [variant: string]: {
      component: JSX.Element;
      extendsTo?: any;
      noPadding?: boolean;
    };
  } = {
    ...privacy(props),
    ...menu(props),
    ...auth(props),
    ...booking(props),
    ...globe(props),
    ...location(props),
    ...guests(props),
    ...checkin(props),
    ...checkout(props),
    ...listing(props),
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
              ...variants[variant].extendsTo,
            }}
            sx={{
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
        ...variants[variant].extendsTo,
        width: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 12px',
      }}
      sx={{ bg: 'white' }}
      data-testid={`${variant}-modal`}
    >
      {variants[variant].component}
    </div>
  );
};
