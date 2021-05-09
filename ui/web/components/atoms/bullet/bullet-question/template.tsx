export interface QuestionBulletTemplateProps {
  title?: string;
  answer?: string;
}

export const QuestionBulletTemplate: React.FC<QuestionBulletTemplateProps> = ({
  title,
  answer,
}) => {
  return (
    <div className="py-4 border-b border-gray-100">
      <div>
        <h4 className="text-lg text-green-700">{title}</h4>
      </div>
      {/* <div>{answer}</div> */}
    </div>
  );
};
