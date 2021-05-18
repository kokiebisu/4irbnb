import {
  QuestionBulletTemplate,
  QuestionBulletTemplateProps,
} from './template';

export interface QuestionBulletProps extends QuestionBulletTemplateProps {}

export const QuestionBullet: React.FC<QuestionBulletProps> = (props) => {
  return <QuestionBulletTemplate {...props} />;
};
