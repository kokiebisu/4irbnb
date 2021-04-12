import { Icon } from '@icons';

export interface LogoButtonProps {
  noName?: boolean;
  fill?: string;
}

/**
 * Renders the Logo Button component
 * @param noName
 * @param fill
 */
export const LogoButton: React.FC<LogoButtonProps> = ({ noName, fill }) => {
  return noName ? (
    <Icon variant="logo" logoType="noName" fill={fill} width={30} height={32} />
  ) : (
    <Icon variant="logo" logoType="name" fill={fill} width={102} height={32} />
  );
};

export const logo = (props) => {
  return {
    logo: <LogoButton {...props} />,
  };
};
