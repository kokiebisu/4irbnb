import {
  QuestionBulletTemplate,
  QuestionBulletTemplateProps,
} from "./template";

export type QuestionBulletProps = QuestionBulletTemplateProps;

export const QuestionBullet = (props: QuestionBulletProps): JSX.Element => (
  <QuestionBulletTemplate {...props} />
);
