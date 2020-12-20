import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** hooks */
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll";

/** components */
import { MenuModal } from "./modal.menu";
import { PrivacyModal } from "./modal.privacy";
import { AvailabilityModal } from "./modal.availability";
import { AuthModal } from "./modal.auth";
import { BookingModal } from "./modal.booking";
import { GlobeModal } from "./modal.globe";

/** contexts */
import { useToggleDispatch } from "../../../context/toggle";

export interface ModalProps {
  variant: string;
  extendsTo?: string;
  dispatch?: any;
  animate?: string;
  lock?: boolean;
  criteria?: any;
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
  animate = "default",
  lock = false,
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
      transition: { duration: 0.4, ease: "easeOut" },
    },
    default: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  const variants: {
    [variant: string]: JSX.Element;
  } = {
    privacy: <PrivacyModal {...props} />,
    menu: <MenuModal {...props} />,
    auth: <AuthModal {...props} />,
    availability: <AvailabilityModal {...props} />,
    booking: <BookingModal {...props} />,
    globe: <GlobeModal {...props} />,
  };

  if (criteria !== undefined) {
    return (
      <div className={extendsTo} data-testid={`${variant}-modal`}>
        <AnimatePresence>
          {criteria && (
            <motion.div
              data-testid="modal"
              exit={{ opacity: 0 }}
              initial={animation[animate].initial}
              animate={animation[animate].animate}
              transition={animation[animate].transition}
              ref={containerRef}
              className={extendsTo}
            >
              {variants[variant]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  return (
    <div className={extendsTo} data-testid={`${variant}-modal`}>
      {variants[variant]}
    </div>
  );
};
