export type ButtonLoginProps = {
  platform?: string;
  icon?: any;
};

export type ButtonProps = ButtonLoginProps & {
  extendsTo?: string;
  type: string;
  onPress?: () => void;
  to?: string;
  tap?: {
    scale: number;
  };
  children?: React.ReactNode;
};
