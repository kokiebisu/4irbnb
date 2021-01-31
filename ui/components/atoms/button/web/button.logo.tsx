/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { NameLogo, NoNameLogo } from "../../../public/svg/logo";

export const LogoButton: React.FC<{ noName?: boolean; fill?: string }> = ({
  noName = false,
  fill = "#F5385D",
}) => {
  return noName ? (
    <NoNameLogo fill={fill} width={30} height={32} />
  ) : (
    <NameLogo fill={fill} width={102} height={32} />
  );
};
