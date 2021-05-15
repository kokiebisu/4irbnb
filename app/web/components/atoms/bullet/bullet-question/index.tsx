import {
  QuestionBulletTemplate,
  QuestionBulletTemplateProps,
} from './template';

export interface QuestionBulletProps extends QuestionBulletTemplateProps {}

const QuestionBullet: React.FC<QuestionBulletProps> = (props) => {
  return <QuestionBulletTemplate {...props} />;
};

export const question = (props: QuestionBulletProps) => {
  return {
    question: { component: <QuestionBullet {...props} /> },
  };
};
