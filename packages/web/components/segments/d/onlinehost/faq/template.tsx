import { Layout } from '@layout';
import { Bullet, $Bullet } from '@bullet';

import space from '@styles/space.module.scss';

export interface FAQTemplateProps {
  questions?: { question: string; answer: string }[];
}

export const FAQTemplate: React.FC<FAQTemplateProps> = ({ questions }) => {
  return (
    <Layout variant="onlinehost" title="Frequently asked questions">
      <div
        style={{
          maxWidth: 900,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          columnGap: 13,
        }}
      >
        {questions.map(({ question, answer }, index) => {
          return (
            <div
              style={{ width: '100%' }}
              className={[space['m-v--22']].join(' ')}
              key={index}
            >
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
