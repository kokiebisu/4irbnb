import { Layout } from '@layout';
import { Button } from '@button';
import { Card, $Card } from '@card';

export interface WorksTemplateProps {
  categories?: string[];
}

export const WorksTemplate: React.FC<WorksTemplateProps> = ({ categories }) => {
  return (
    <div>
      <Layout variant="homes" title="How hosting works">
        <div>
          {categories.map((category, index) => {
            return (
              <div className="mb-2" key={index}>
                <Card variant={$Card.WORKS} work={category} />
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex justify-center">
          <Button
            variant="border"
            bold
            title="Start creating your experience"
          />
        </div>
      </Layout>
    </div>
  );
};
