import React, { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

import { MenuModal } from './modal.menu';
import { PrivacyModal } from './modal.privacy';
import { RegisterModal } from './modal.register';
import { AvailabilityModal } from './modal.availability';

import { useToggleDispatch } from '../../../context/toggle';
import { ModalProps } from './props';

interface mapProps {
  [key: string]: JSX.Element;
}

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
    register: <RegisterModal {...props} />,
    availability: <AvailabilityModal {...props} />,
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
