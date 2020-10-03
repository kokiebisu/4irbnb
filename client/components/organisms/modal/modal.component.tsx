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

export const Modal: React.FC<ModalProps> = ({ type, ...props }) => {
  const { criteria } = props;
  const types: mapProps = {
    privacy: <PrivacyModal {...props} />,
  };
  if (criteria) {
    return <AnimatePresence>{criteria && types[type]}</AnimatePresence>;
  }
  return types[type];
};
