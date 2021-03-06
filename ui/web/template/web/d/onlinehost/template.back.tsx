/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Bullet, $Bullet } from '@nextbnb/atoms';
import { Layout, $Layout } from '@nextbnb/layout';

export const BackTemplate: React.FC<{
  back?: string;
}> = () => {
  return (
    <Layout
      variant={$Layout.ONLINEHOST}
      title="We've got your back"
      subtitle="You’re not alone—you'll have access to educational tools and opportunities to help you grow as a host and entrepreneur."
    >
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 20,
          margin: '32px 0',
        }}
      >
        {['resources', 'events', 'community'].map((type, index) => {
          return (
            <div key={index} css={{ marginBottom: 16 }}>
              <Bullet variant={$Bullet.ONLINEHOST} type={type} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
