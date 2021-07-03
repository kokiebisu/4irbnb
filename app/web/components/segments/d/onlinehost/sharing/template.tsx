import { Layout } from '@layout';
import { Card, $Card } from '@card';
import { Button } from '@atoms';

export interface SharingSegmentTemplateProps {
  categories?: string[];
}

export const SharingSegmentTemplate: React.FC<SharingSegmentTemplateProps> = ({
  categories,
}) => {
  return (
    <Layout
      variant="onlinehost"
      title="How hosts are sharing their world"
      subtitle="These hosts bring the spirit of experiences to the screen with unique small group activities to do together while we're apart."
    >
      <div className="my-9 grid grid-cols-3 gap-6">
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
