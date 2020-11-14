import React, { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

/**
 * Hooks
 */
import useOnClickOutside from '../../../hooks/useOnClickOutside';

/**
 * Components
 */
import { MenuModal } from './modal.menu';
import { PrivacyModal } from './modal.privacy';
import { AvailabilityModal } from './modal.availability';
import { AuthModal } from './modal.auth';
import { BookingModal } from './modal.booking';

/**
 * Contexts
 */
import { useToggleDispatch } from '../../../context/toggle';

/**
 * Props
 */
import { ModalProps } from './props';

interface mapProps {
  [key: string]: JSX.Element;
}

/**
 * Bundles all the modal components
 * @param {string} type - Type of modal component
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} dispatchType - The type of dispatch
 */
export const Modal: React.FC<ModalProps> = ({
  type,
  extendsTo,
  dispatchType,
  ...props
}) => {
  const { criteria } = props;
  const ref = useRef();
  const toggleDispatch = useToggleDispatch();
  useOnClickOutside(ref, () => toggleDispatch({ type: `${dispatchType}` }));

  const types: mapProps = {
    privacy: <PrivacyModal {...props} />,
    menu: <MenuModal refProp={ref} {...props} />,
    auth: <AuthModal {...props} />,
    availability: <AvailabilityModal {...props} />,
    booking: <BookingModal {...props} />,
  };
  if (criteria !== undefined) {
    return (
      <AnimatePresence>
        {criteria && <div className={extendsTo}>{types[type]}</div>}
      </AnimatePresence>
    );
  }
  return <div className={extendsTo}>{types[type]}</div>;
};
