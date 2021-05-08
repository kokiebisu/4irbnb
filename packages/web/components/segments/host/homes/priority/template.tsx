import { Layout } from '@layout';
import { Bullet } from '@bullet';

export interface PrioritySegmentTemplateProps {}

/**
 * Renders the priority section
 * @param {string[]} priorities - The priorities
 */
export const PrioritySegmentTemplate: React.FC<PrioritySegmentTemplateProps> = () => {
  return (
    <Layout variant="homes" title="Safety is our priority">
      <div className="mt-4">
        <div className="sm:grid grid-cols-3 gap-x-3">
          {['protection', 'guidance', 'requirements'].map(
            (priority: 'protection' | 'guidance' | 'requirements', index) => {
              return (
                <div key={index} className="mb-6">
                  <Bullet variant="priority" priorityType={priority} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </Layout>
  );
};
