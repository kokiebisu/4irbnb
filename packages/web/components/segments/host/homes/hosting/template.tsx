import responsive from '@styles/responsive.module.scss';
import space from '@styles/space.module.scss';
import layout from '@styles/layout.module.scss';

import { Layout } from '@layout';
import { Card, $Card } from '@card';

import { types } from '@card/card.hosting';

export interface HostingTemplateProps {}

/**
 * Renders the priority section
 * @param {string[]} priorities - The priorities
 */
export const HostingTemplate: React.FC<HostingTemplateProps> = () => {
  return (
    <Layout variant="homes" title="How hosting works">
      <div className="mt-3">
        <div
          style={{ scrollSnapType: 'x mandatory' }}
          className="w-full flex overflow-x-auto"
        >
          {Object.keys(types).map((type, index) => {
            return (
              <div
                key={index}
                className="mb-6 min-w-screen lg:w-full"
                style={{ scrollSnapAlign: 'start' }}
              >
                <Card variant={$Card.HOSTING} type={type} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
