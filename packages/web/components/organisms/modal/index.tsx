import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { useLockBodyScroll } from '@hooks/useLockBodyScroll';
import { MenuModal } from '@modal/modal.menu';
import { PrivacyModal } from '@modal/modal.privacy';
import { AuthModal } from '@modal/modal.auth';
import { BookingModal } from '@modal/modal.booking';
import { GlobeModal } from '@modal/modal.globe';
import { LocationModal } from '@modal/modal.location';
import { GuestsModal } from '@modal/modal.guests';
import { CheckModal } from '@modal/modal.check';
import { ListingModal } from '@modal/modal.listing';
import { useToggleDispatch } from '@context/toggle';
import shape from '@styles/shape.module.scss';
import modal from '@modal/modal.module.scss';

export const $Modal = {
  PRIVACY: 'privacy',
  MENU: 'menu',
  AUTH: 'auth',
  BOOKING: 'booking',
  GLOBE: 'globe',
  LOCATION: 'location',
  GUESTS: 'guests',
  CHECKIN: 'checkin',
  CHECKOUT: 'checkout',
  LISTING: 'listing',
};

export interface ModalProps {
  variant: string;
  extendsTo?: string;
  dispatch?: any;
  animate?: string;
  lock?: boolean;
  criteria?: any;
  noPadding?: boolean;
  [property: string]: any;
}

/**
 * Bundles all the modal components
 * @param {string} variant - Variant of modal component
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} dispatchType - The type of dispatch
 */
export const Modal: React.FC<ModalProps> = ({
  variant,
  extendsTo,
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
  useOnClickOutside(containerRef, () =>
    toggleDispatch({ type: `${dispatch}` })
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
      extendsTo?: string;
      noPadding?: boolean;
    };
  } = {
    privacy: {
      component: <PrivacyModal {...props} />,
      extendsTo: `rounded-md p-5 ${[modal['modal__privacy']].join(' ')}`,
    },
    menu: {
      component: <MenuModal {...props} />,
      extendsTo: `rounded-lg ${[shape['w--200']].join(' ')}`,
    },
    auth: {
      component: <AuthModal {...props} />,
      extendsTo: `rounded-lg ${[modal['w__auth']].join(' ')}`,
    },
    booking: {
      component: <BookingModal {...props} />,
      extendsTo: 'p-4 border border-gray-600 rounded-lg',
    },
    globe: {
      component: <GlobeModal {...props} />,
      extendsTo: `p-4 rounded-lg ${[shape['max-w--720'], shape['h--fit']].join(
        ' '
      )}`,
    },
    location: {
      component: <LocationModal {...props} />,
      extendsTo: `rounded-lg p-5 ${[shape['max-w--400']].join(' ')}`,
    },
    guests: {
      component: <GuestsModal {...props} />,
      extendsTo: `p-5 rounded-lg ${[shape['max-w--325']].join(' ')}`,
    },
    checkin: {
      component: <CheckModal {...props} />,
      extendsTo: `px-7 py-5  rounded-lg ${[shape['max-w--720']].join(' ')}`,
    },
    checkout: {
      component: <CheckModal {...props} />,
      extendsTo: `rounded-lg px-7 py-5 ${[shape['max-w--720']].join(' ')}`,
    },
    listing: {
      component: <ListingModal {...props} />,
      extendsTo: `p-5 rounded-lg ${[shape['max-w--500']].join(' ')}`,
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
            className={`shadow-sm bg-white w-full ${variants[variant].extendsTo} ${extendsTo}`}
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
      className={`shadow-sm bg-white w-full ${variants[variant].extendsTo} ${extendsTo}`}
      data-testid={`${variant}-modal`}
    >
      {variants[variant].component}
    </div>
  );
};
