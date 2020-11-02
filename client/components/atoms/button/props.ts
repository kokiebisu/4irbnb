export type ButtonLoginProps = {
  platform?: string;
  icon?: any;
};

export type GlobeButtonProps = {
  tap?: {
    scale: number;
  };
  onPress?: () => void;
  inverse?: boolean;
};

export type HostButtonProps = {
  to?: string;
  inverse?: boolean;
};

export type MenuButtonProps = {
  tap?: string;
  onPress?: () => void;
  inverse?: boolean;
};

export type ButtonProps = (ButtonLoginProps & {
  extendsTo?: string;
  type?: string;
  to?: string;
}) &
  (GlobeButtonProps & {
    extendsTo?: string;
    type?: string;
  }) &
  (HostButtonProps & {
    extendsTo?: string;
    type?: string;
  }) &
  (MenuButtonProps & {
    extendsTo?: string;
    type?: string;
  });
