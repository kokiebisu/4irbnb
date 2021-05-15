import { useFooter } from './logic';
import { FooterTemplate } from './template';

export interface FooterProps {
  spread?: boolean;
}

/**
 * Renders the footer
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const Footer: React.FC<FooterProps> = () => {
  const data = useFooter();
  return <FooterTemplate {...data} />;
};
