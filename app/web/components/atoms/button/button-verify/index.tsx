import { VerifyButtonTemplate } from './template';

export interface VerifyButtonProps {}

export const VerifyButton: React.FC<VerifyButtonProps> = (props) => {
  return <VerifyButtonTemplate {...props} />;
};
