import { Card, $Card } from '@card';

/**
 * @param {function} onRedirect - Triggered when user clicked 'Become a host' button
 */
export const WorthTemplate: React.FC<{ onRedirect?: () => void }> = ({
  onRedirect,
}) => {
  return <Card variant={$Card.WORTH} onClick={onRedirect} />;
};
