import { Card, $Card } from '@card';
import { HandleRedirectProps } from '@utils/redirect';

export interface WorthTemplateProps {
  handleRedirectToHostPage: HandleRedirectProps;
}

/**
 * @param {function} onRedirect - Triggered when user clicked 'Become a host' button
 */
export const WorthTemplate: React.FC<WorthTemplateProps> = ({
  handleRedirectToHostPage,
}) => {
  return <Card variant={$Card.WORTH} onClick={handleRedirectToHostPage} />;
};
