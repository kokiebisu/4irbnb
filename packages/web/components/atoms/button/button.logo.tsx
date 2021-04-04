/** styles */
import styles from "@styles/index.module.scss";

/** vectors */
import { NameLogo, NoNameLogo } from "@svg/logo";

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
