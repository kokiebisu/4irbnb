export type ButtonProps = {
  styles?: any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  title?: string;
  children?: React.ReactNode;
  inverse?: boolean;
  onPress: () => void;
};
