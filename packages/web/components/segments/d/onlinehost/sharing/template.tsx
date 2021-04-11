import { Layout } from '@layout';
import space from '@styles/space.module.scss';
import { Card, $Card } from '@card';
import { Button } from '@button';

export interface SharingTemplateProps {
  categories?: string[];
}

export const SharingTemplate: React.FC<SharingTemplateProps> = ({
  categories,
}) => {
  return (
    <Layout
      variant="onlinehost"
      title="How hosts are sharing their world"
      subtitle="These hosts bring the spirit of experiences to the screen with unique small group activities to do together while we're apart."
    >
      <div
        className={`${[space['m-v--100']].join(' ')} grid grid-cols-3 gap-6`}
      >
        {categories.map((sharing, index) => {
          return (
            <div key={index}>
              <Card variant={$Card.SHARING} sharing={sharing} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button variant="border" bold title="Start creating your experience" />
      </div>
    </Layout>
  );
};
