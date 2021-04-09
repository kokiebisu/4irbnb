import { $Icon, Icon } from '@icons';

/**
 * Renders the Logo Button component
 * @param noName
 * @param fill
 */
const LogoButton: React.FC<{ noName?: boolean; fill?: string }> = ({
  noName = false,
  fill = '#F5385D',
}) => {
  return noName ? (
    <Icon
      variant={$Icon.LOGO}
      logoType="noName"
      fill={fill}
      width={30}
      height={32}
    />
  ) : (
    <Icon
      variant={$Icon.LOGO}
      logoType="name"
      fill={fill}
      width={102}
      height={32}
    />
  );
};

export const logo = (props) => {
  return {
    logo: {
      component: <LogoButton {...props} />,
      style: '',
    },
  };
};
