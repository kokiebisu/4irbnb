import { Icon } from '@atoms';

export type LogoButtonTemplateProps = {
  noName: boolean;
  fill: string;
};

/**
 * Renders the Logo Button component
 * @param noName
 * @param fill
 */
export const LogoButtonTemplate: React.FC<LogoButtonTemplateProps> = ({
  noName,
  fill,
}) => {
  return noName ? (
    <Icon variant="logo" logoType="noName" fill={fill} width={30} height={32} />
  ) : (
    <Icon variant="logo" logoType="name" fill={fill} width={102} height={32} />
  );
};
