import React from 'react';

/**
 * Components
 */
import { Layout } from '../../../layout/layout.component';
import { Bullet } from '../../../components/atoms/bullet/bullet.component';

/**
 * Props
 */
import { PrioritySectionProps } from './props';

/**
 * Styles
 */
import space from '../../../styles/space.module.scss';

/**
 * Renders the priority section
 * @param {string[]} priorities - The priorities
 */
export const PrioritySection: React.FC<PrioritySectionProps> = () => {
  const priorities = ['protection', 'guidance', 'requirements'];
  return (
    <Layout type='section' sectionType='homes' title='Safety is our priority'>
      <div className={[space['m-t--16']].join(' ')}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            columnGap: 12,
          }}
          className={[].join(' ')}>
          {priorities.map((priority, index) => {
            return (
              <div key={index}>
                <Bullet type='priority' priority={priority} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
