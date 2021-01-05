import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** hooks */
import useOnClickOutside from "@hooks/useOnClickOutside";
import { useLockBodyScroll } from "@hooks/useLockBodyScroll";

/** components */
import { MenuModal } from "@modal/modal.menu";
import { PrivacyModal } from "@modal/modal.privacy";
import { AuthModal } from "@modal/modal.auth";
import { BookingModal } from "@modal/modal.booking";
import { GlobeModal } from "@modal/modal.globe";
import { LocationModal } from "@modal/modal.location";
import { GuestsModal } from "@modal/modal.guests";
import { CheckModal } from "@modal/modal.check";
import { ListingModal } from "@modal/modal.listing";

/** contexts */
import { useToggleDispatch } from "@context/toggle";

/** styles */
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import modal from "@modal/modal.module.scss";

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
  animate = "default",
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
      extendsTo?: string;
      noPadding?: boolean;
    };
  } = {
    privacy: {
      component: <PrivacyModal {...props} />,
      extendsTo: [modal["modal__privacy"], shape["br--8"], space["p--25"]].join(
        " "
      ),
    },
    menu: {
      component: <MenuModal {...props} />,
      extendsTo: [shape["w--200"], shape["br--16"]].join(" "),
    },
    auth: {
      component: <AuthModal {...props} />,
      extendsTo: [modal["w__auth"], shape["br--16"]].join(" "),
    },
    booking: {
      component: <BookingModal {...props} />,
      extendsTo: [space["p--24"], color["b--white__2"], shape["br--10"]].join(
        " "
      ),
    },
    globe: {
      component: <GlobeModal {...props} />,
      extendsTo: [
        shape["max-w--720"],
        space["p--25"],
        shape["h--fit"],
        shape["br--16"],
      ].join(" "),
    },
    location: {
      component: <LocationModal {...props} />,
      extendsTo: [shape["max-w--400"], shape["br--16"], space["p-v--25"]].join(
        " "
      ),
    },
    guests: {
      component: <GuestsModal {...props} />,
      extendsTo: [shape["max-w--325"], shape["br--32"], space["p--25"]].join(
        " "
      ),
    },
    checkin: {
      component: <CheckModal {...props} />,
      extendsTo: [
        shape["max-w--720"],
        shape["br--32"],
        space["p-h--45"],
        space["p-v--30"],
      ].join(" "),
    },
    checkout: {
      component: <CheckModal {...props} />,
      extendsTo: [
        shape["max-w--720"],
        shape["br--32"],
        space["p-h--45"],
        space["p-v--30"],
      ].join(" "),
    },
    listing: {
      component: <ListingModal {...props} />,
      extendsTo: [shape["max-w--500"], space["p--25"], shape["br--20"]].join(
        " "
      ),
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
            className={`${[shape["shadow--sm"], color["bg--white"]].join(
              " "
            )}  ${variants[variant].extendsTo} ${extendsTo}`}
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
      className={`${[shape["shadow--sm"], color["bg--white"]].join(" ")}  ${
        variants[variant].extendsTo
      } ${extendsTo}`}
      data-testid={`${variant}-modal`}
    >
      {variants[variant].component}
    </div>
  );
};
