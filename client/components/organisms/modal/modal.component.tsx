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

interface mapProps {
  [key: string]: JSX.Element;
}

/**
 * Bundles all the modal components
 * @param {string} type - Type of modal component
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} dispatchType - The type of dispatch
 */
export const Modal: React.FC<{
  type?: string;
  extendsTo?: string;
  dispatch?: any;
  animate?: string;
  lock?: boolean;
  criteria?: any;
}> = ({
  type,
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

  const types: mapProps = {
    privacy: <PrivacyModal {...props} />,
    menu: <MenuModal {...props} />,
    auth: <AuthModal {...props} />,
    availability: <AvailabilityModal {...props} />,
    booking: <BookingModal {...props} />,
    globe: <GlobeModal {...props} />,
  };

  if (criteria !== undefined) {
    return (
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
            {types[type]}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
  return (
    <div className={extendsTo} data-testid="modal">
      {types[type]}
    </div>
  );
};
