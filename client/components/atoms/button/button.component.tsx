import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/** Components */
import { AuthButton } from "./button.auth";
import { ButtonProps } from "./props";
import { GlobeButton } from "./button.globe";
import { HostButton } from "./button.host";
import { MenuButton } from "./button.menu";
import { PrivacyButton } from "./button.privacy";
import { BorderButton } from "./button.border";
import { BannerButton } from "./button.banner";
import { PrimaryButton } from "./button.primary";
import { SearchbarButton } from "./button.searchbar";
import { PaginateButton } from "./button.paginate";
import { ExpandButton } from "./button.expand";
import { OptionButton } from "./button.option";
import { UnderlineButton } from "./button.underline";
import { FilterButton } from "./button.filter";
import { ModalButton } from "./button.modal";
import { BackButton } from "./button.back";

/** Styles */
import layout from "../../../styles/layout.module.scss";
import shape from "../../../styles/shape.module.scss";

interface mapProps {
  [key: string]: JSX.Element;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Button: React.FC<ButtonProps> = ({
  extendsTo,
  type,
  children,
  onPress,
  to,
  block,
  animate,
  ...props
}) => {
  const { disable = false } = props;
  const types: mapProps = {
    auth: <AuthButton {...props} />,
    globe: <GlobeButton {...props} />,
    host: <HostButton {...props} />,
    menu: <MenuButton {...props} />,
    privacy: <PrivacyButton {...props} />,
    border: <BorderButton {...props} />,
    banner: <BannerButton {...props} />,
    primary: <PrimaryButton {...props} />,
    // searchbar: <SearchbarButton {...props} />,
    paginate: <PaginateButton {...props} />,
    // expand: <ExpandButton {...props} />,
    option: <OptionButton {...props} />,
    underline: <UnderlineButton {...props} />,
    filter: <FilterButton {...props} />,
    modal: <ModalButton {...props} />,
    back: <BackButton {...props} />,
  };

  if (to) {
    return (
      <div
        style={{ cursor: "pointer" }}
        className={extendsTo}
        data-testid="button"
      >
        <Link href={to}>
          <a>{type ? types[type] : children}</a>
        </Link>
      </div>
    );
  }

  return (
    <motion.button
      transition={{ duration: 0.1, ease: "easeInOut" }}
      whileTap={{ scale: disable || !animate ? 1 : 0.995 }}
      whileHover={{ scale: disable || !animate ? 1 : 1.005 }}
      data-testid="button"
      className={`${extendsTo} ${
        block
          ? [layout["block"], shape["w--full"]].join(" ")
          : layout["inline-block"]
      }`}
      onClick={onPress}
      disabled={disable}
      style={{ cursor: disable ? "default" : "pointer" }}
    >
      {type ? types[type] : children}
    </motion.button>
  );
};
