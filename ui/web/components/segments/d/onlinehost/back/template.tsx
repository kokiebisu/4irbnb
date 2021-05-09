import { Layout } from '@layout';
import { Bullet } from '@bullet';

export interface BackSegmentTemplateProps {}

export const BackSegmentTemplate: React.FC<BackSegmentTemplateProps> = () => {
  return (
    <Layout
      variant="onlinehost"
      title="We've got your back"
      subtitle="You’re not alone—you'll have access to educational tools and opportunities to help you grow as a host and entrepreneur."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 20,
        }}
        className="my-5"
      >
        {['resources', 'events', 'community'].map(
          (type: 'resources' | 'events' | 'community', index) => {
            return (
              <div key={index} className="mb-4">
                <Bullet variant="onlinehost" onlinehostType={type} />
              </div>
            );
          }
        )}
      </div>
    </Layout>
  );
};
