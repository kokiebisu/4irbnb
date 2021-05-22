import {
  QuestionBulletTemplate,
  QuestionBulletTemplateProps,
} from './template';

export interface QuestionBulletProps extends QuestionBulletTemplateProps {}

export const QuestionBullet = (props: QuestionBulletProps): JSX.Element => {
  return <QuestionBulletTemplate {...props} />;
};
