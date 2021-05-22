import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { useLockBodyScroll } from '@hooks/useLockBodyScroll';
import { MenuModalProps } from '@modal/modal-menu';
import { PrivacyModalProps } from '@modal/modal-privacy';
import { AuthModalProps } from '@modal/modal-auth';
import { BookingModalProps } from '@modal/modal-booking';
import { GlobeModalProps } from '@modal/modal-globe';
import { LocationModalProps } from '@modal/modal-location';
import { GuestsModalProps } from '@modal/modal-guests';
import { CheckModalProps } from '@modal/modal-check';
import { ListingModalProps } from '@modal/modal-listing';
import { useToggleDispatch } from '@context/toggle';
import { factory } from './utils/factory';

export type ModalProps = (
  | ({ variant: 'privacy' } & PrivacyModalProps)
  | ({ variant: 'menu' } & MenuModalProps)
  | ({ variant: 'auth' } & AuthModalProps)
  | ({ variant: 'booking' } & BookingModalProps)
  | ({ variant: 'globe' } & GlobeModalProps)
  | ({ variant: 'location' } & LocationModalProps)
  | ({ variant: 'guests' } & GuestsModalProps)
  | ({ variant: 'checkin' } & CheckModalProps)
  | ({ variant: 'checkout' } & CheckModalProps)
  | ({ variant: 'listing' } & ListingModalProps)
) & {
  criteria?: boolean;
  lock?: boolean;
  noPadding?: boolean;
  animate: string;
  dispatch: string;
};

/**
 * Bundles all the modal components
 * @param {string} variant - Variant of modal component
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} dispatchType - The type of dispatch
 */
export const Modal: React.FC<ModalProps> = ({
  dispatch,
  animate = 'default',
  lock = false,
  noPadding = false,
  ...props
}) => {
  const { criteria } = props;
  const containerRef = useRef();
  const toggleDispatch = useToggleDispatch();
  if (lock) {
    useLockBodyScroll();
  }
  useOnClickOutside(containerRef, () => {
    toggleDispatch({ type: `${dispatch as string}` });
  });

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
            data-testid={`${props.variant as string}-modal`}
            exit={{ opacity: 0 }}
            initial={animation[animate].initial}
            animate={animation[animate].animate}
            transition={animation[animate].transition}
            ref={containerRef}
            className={`shadow-sm bg-white w-full ${variants[variant].extendsTo} ${extendsTo}`}
          >
            {factory(props)}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
  return (
    <div
      ref={containerRef}
      className={`shadow-sm bg-white w-full ${variants[variant].extendsTo} ${extendsTo}`}
      data-testid={`${variant}-modal`}
    >
      {factory(props)}
    </div>
  );
};
