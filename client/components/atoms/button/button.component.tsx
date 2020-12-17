import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/** components */
import { AuthButton } from "./button.auth";
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
import { ClosedButton } from "./button.closed";
import { TransparentButton } from "./button.transparent";
import { GlobeButton } from "./button.globe";
import { LinkButton } from "./button.link";

/** styles **/
import layout from "../../../styles/layout.module.scss";
import shape from "../../../styles/shape.module.scss";

export interface ButtonProps {
  extendsTo?: string;
  variant?: string;
  onClick?: () => void;
  block?: boolean;
  animate?: boolean;
  [x: string]: any;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Button: React.FC<ButtonProps> = ({
  extendsTo,
  variant,
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const { disable } = props;
  const variants: { [key: string]: JSX.Element } = {
    auth: <AuthButton {...props} />,
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
    transparent: <TransparentButton {...props} />,
    globe: <GlobeButton {...props} />,
    link: <LinkButton {...props} />,
    closed: <ClosedButton {...props} />,
  };

  return (
    <motion.button
      transition={{ duration: 0.1, ease: "easeInOut" }}
      whileTap={{ scale: disable || !animate ? 1 : 0.995 }}
      whileHover={{ scale: disable || !animate ? 1 : 1.005 }}
      data-testid={`button--${variant}`}
      className={`${extendsTo} ${
        block
          ? [layout["block"], shape["w--full"]].join(" ")
          : layout["inline-block"]
      }`}
      onClick={!disable ? onClick : undefined}
      disabled={disable}
      style={{ cursor: disable ? "default" : "pointer" }}
    >
      {variant ? variants[variant] : children}
    </motion.button>
  );
};
