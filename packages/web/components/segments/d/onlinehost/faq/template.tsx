import { Layout } from '@layout';
import { Bullet, $Bullet } from '@bullet';

export interface FAQTemplateProps {
  questions?: { question: string; answer: string }[];
}

export const FAQTemplate: React.FC<FAQTemplateProps> = ({ questions }) => {
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
              <Bullet
                variant={$Bullet.QUESTION}
                title={question}
                answer={answer}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
