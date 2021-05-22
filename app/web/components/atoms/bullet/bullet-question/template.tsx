export type QuestionBulletTemplateProps = {
  title: string;
  answer: string;
};

export const QuestionBulletTemplate = ({
  title,
  answer,
}: QuestionBulletTemplateProps): JSX.Element => {
  return (
    <div className="py-4 border-b border-gray-100">
      <div>
        <h4 className="text-lg text-green-700">{title}</h4>
      </div>
      {/* <div>{answer}</div> */}
    </div>
  );
};
