import { Layout } from '@layout';
import { Bullet } from '@atoms';

export interface BackSegmentTemplateProps {
  items: { icon: string; title: string; description: string }[];
}

export const BackSegmentTemplate: React.FC<BackSegmentTemplateProps> = ({
  items,
}) => {
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
        {items.map(({ icon, title, description }, index) => {
          return (
            <div key={index} className="mb-4">
              <Bullet
                variant="quatertiary"
                icon={<img src={icon} width={40} height={40} />}
                title={title}
                description={description}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
