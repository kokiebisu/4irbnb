/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Card, $Card } from '@nextbnb/molecules/dist/bundle.esm';
import { Layout } from '@nextbnb/layout/dist/bundle.esm';

/**
 * Renders the All section
 */
export const AllTemplate: React.FC<{
  items?: { name: string; imgUrl: string }[];
}> = ({
  items = [undefined, undefined, undefined, undefined, undefined, undefined],
}) => {
  return (
    <Layout variant="homes" title="From castles to condos, guests book it all">
      <div
        css={{
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
