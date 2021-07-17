import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { useLockBodyScroll } from "@hooks/useLockBodyScroll";
import { MenuModalProps } from "@modal/modal-menu";
import { PrivacyModalProps } from "@modal/modal-privacy";
import { BookingModalProps } from "@modal/modal-booking";
import { useToggleDispatch } from "@context/toggle";
import { factory } from "./utils/factory";

export type ModalProps =
  | ({ variant: "privacy" } & PrivacyModalProps)
  | ({ variant: "menu" } & MenuModalProps)
  | { variant: "auth" }
  | ({ variant: "booking" } & BookingModalProps)
  | { variant: "globe" }
  | { variant: "location" }
  | { variant: "guests" }
  | { variant: "checkin" }
  | { variant: "checkout" }
  | { variant: "listing" };

/**
 * Bundles all the modal components
 * @param {string} variant - Variant of modal component
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} dispatchType - The type of dispatch
 */
export const Modal = ({
  dispatch,
  animate = "default",
  lock = false,
  noPadding = false,
  ...props
}: ModalProps & {
  criteria?: boolean;
  lock?: boolean;
  noPadding?: boolean;
  animate: string;
  dispatch: string;
}): JSX.Element => {
  const { criteria } = props;
  const containerRef = useRef<any>();
  const toggleDispatch = useToggleDispatch();
  if (lock) {
    useLockBodyScroll();
  }
  useOnClickOutside(containerRef, () => {
    toggleDispatch({ type: `${dispatch as string}` });
  });

  const animation: {
    [property: string]: { initial: any; animate: any; transition: any };
  } = {
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

  if (criteria !== undefined) {
    return (
      <AnimatePresence>
        {criteria && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={animation[animate].initial}
            animate={animation[animate].animate}
            transition={animation[animate].transition}
            ref={containerRef}
          >
            {factory(props)}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
  return (
    <div ref={containerRef} className={`shadow-sm bg-white w-full`}>
      {factory(props)}
    </div>
  );
};
