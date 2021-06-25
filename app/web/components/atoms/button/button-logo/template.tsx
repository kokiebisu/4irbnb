import { Icon } from '@atoms';

export type LogoButtonTemplateProps = {
  noName: boolean;
  fill: string;
  onClick: () => void;
};

/**
 * Renders the Logo Button component
 * @param noName
 * @param fill
 */
export const LogoButtonTemplate = ({
  noName,
  fill,
  onClick,
}: LogoButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="logo-button"
      className="inline-block"
      onClick={onClick}
    >
      <Icon
        variant="logo"
        logoType={noName ? 'noName' : 'name'}
        fill={fill}
        width={noName ? 30 : 102}
        height={32}
      />
    </button>
  );
};
