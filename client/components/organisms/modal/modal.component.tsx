import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { PrivacyModal } from './modal.privacy';

export interface ModalProps {
  extendsTo?: string;
  criteria?: any;
  type: string;
}

interface mapProps {
  [key: string]: JSX.Element;
}

export const Modal: React.FC<ModalProps> = ({ type, extendsTo, ...props }) => {
  const { criteria } = props;
  const types: mapProps = {
    privacy: <PrivacyModal {...props} />,
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
