/** styles */
import styles from "@styles/index.module.scss";

/** vectors */
import { NameLogo, NoNameLogo } from "@svg/logo";

export const LogoButton: React.FC<{ noName?: boolean }> = ({
  noName = false,
}) => {
  return noName ? (
    <NoNameLogo fill="#F5385D" width={30} height={32} />
  ) : (
    <NameLogo fill="#F5385D" width={102} height={32} />
  );
};
