/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll";

import { MenuModal } from "./modal.menu";
import { PrivacyModal } from "./modal.privacy";
import { AuthModal } from "./modal.auth";
import { BookingModal } from "./modal.booking";
import { GlobeModal } from "./modal.globe";
import { LocationModal } from "./modal.location";
import { GuestsModal } from "./modal.guests";
import { CheckModal } from "./modal.check";
import { ListingModal } from "./modal.listing";

export const $Modal = {
  PRIVACY: "privacy",
  MENU: "menu",
  AUTH: "auth",
  BOOKING: "booking",
  GLOBE: "globe",
  LOCATION: "location",
  GUESTS: "guests",
  CHECKIN: "checkin",
  CHECKOUT: "checkout",
  LISTING: "listing",
};

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
  variant,
  extendsTo,
  dispatch,
  animate = "default",
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
      transition: { duration: 0.4, ease: "easeOut" },
    },
    default: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.1, ease: "easeInOut" },
    },
  };

  const variants: {
    [variant: string]: {
      component: JSX.Element;
      extendsTo?: any;
      noPadding?: boolean;
    };
  } = {
    privacy: {
      component: <PrivacyModal {...props} />,
      extendsTo: {
        width: [
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
          "100%",
        ],
        maxWidth: [
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
          "auto",
          "1600px",
        ],
        borderRadius: 8,
        padding: 25,
      },
    },
    menu: {
      component: <MenuModal {...props} />,
      extendsTo: { width: 200, borderRadius: 16 },
    },
    auth: {
      component: <AuthModal {...props} />,
      extendsTo: {
        width: ["100%", "100%", "550px"],
        borderRadius: 16,
      },
    },
    booking: {
      component: <BookingModal {...props} />,
      extendsTo: {
        padding: 24,
        border: "1px solid white__2",
        borderRadius: 10,
      },
    },
    globe: {
      component: <GlobeModal {...props} />,
      extendsTo: {
        maxWidth: 720,
        padding: 25,
        height: "fit-content",
        borderRadius: 16,
      },
    },
    location: {
      component: <LocationModal {...props} />,
      extendsTo: {
        maxWidth: 400,
        borderRadius: 16,
        padding: "25px 0",
      },
    },
    guests: {
      component: <GuestsModal {...props} />,
      extendsTo: {
        maxWidth: 325,
        borderRadius: 32,
        padding: 25,
      },
    },
    checkin: {
      component: <CheckModal {...props} />,
      extendsTo: {
        maxWidth: 720,
        borderRadius: 32,
        padding: "30px 45px",
      },
    },
    checkout: {
      component: <CheckModal {...props} />,
      extendsTo: {
        maxWidth: 720,
        borderRadius: 32,
        padding: "30px 45px",
      },
    },
    listing: {
      component: <ListingModal {...props} />,
      extendsTo: {
        maxWidth: 500,
        padding: 25,
        borderRadius: 20,
      },
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
            css={{
              boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 12px",
              width: "100%",
              ...extendsTo,
            }}
            sx={{
              bg: "white",
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
        width: "100%",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 12px",
      }}
      sx={{ bg: "white" }}
      data-testid={`${variant}-modal`}
    >
      {variants[variant].component}
    </div>
  );
};
