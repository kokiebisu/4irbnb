import { useFooter } from "./logic";
import { FooterTemplate } from "./template";

/**
 * Renders the footer
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const Footer = (): JSX.Element => {
  const data = useFooter();
  return <FooterTemplate {...data} />;
};
