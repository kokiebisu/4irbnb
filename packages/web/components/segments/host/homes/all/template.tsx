import { Card, $Card } from '@card';
import { Layout } from '@layout';

export interface AllTemplateProps {
  items?: { name: string; imgUrl: string }[];
}

/**
 * Renders the All section
 */
export const AllTemplate: React.FC<AllTemplateProps> = ({ items }) => {
  return (
    <Layout variant="homes" title="From castles to condos, guests book it all">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          columnGap: 25,
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
        }}
      >
        {items.map((item, index) => {
          return (
            <div key={index} style={{ scrollSnapAlign: 'start' }}>
              <Card
                variant={$Card.CATEGORY}
                imgUrl={item?.imgUrl}
                title={item?.name}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
