import { factory } from './utils/factory';

export const $Panel = {
  EXPERIENCE: 'experience',
  ROOM: 'room',
};

export interface PanelProps {
  variant: string;
  [property: string]: any;
}

export const Panel: React.FC<PanelProps> = ({
  variant,
  extendsTo,
  ...props
}) => {
  const variants = factory(props);
  return (
    <div className={variants[variant].style} data-testid={`${variant}-panel`}>
      {variants[variant].component}
    </div>
  );
};
