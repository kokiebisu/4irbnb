import { Layout } from '@layout';
import { Bullet } from '@atoms';

export interface FAQSegmentTemplateProps {
  questions?: { question: string; answer: string }[];
}

export const FAQSegmentTemplate: React.FC<FAQSegmentTemplateProps> = ({
  questions,
}) => {
  return (
    <Layout variant="onlinehost" title="Frequently asked questions">
      <div
        className="w-full grid"
        style={{
          maxWidth: 900,
          gridTemplateColumns: 'repeat(2, 1fr)',
          columnGap: 13,
        }}
      >
        {questions.map(({ question, answer }, index) => {
          return (
            <div className="my-6 w-full" key={index}>
              <Bullet variant="question" title={question} answer={answer} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
