export interface QuestionBulletProps {
  title?: string;
  answer?: string;
}

const QuestionBullet: React.FC<QuestionBulletProps> = ({ title, answer }) => {
  return (
    <div className="py-4 border-b border-gray-100">
      <div>
        <h4 className="text-lg text-green-700">{title}</h4>
      </div>
      {/* <div>{answer}</div> */}
    </div>
  );
};

export const question = (props) => {
  return {
    question: { component: <QuestionBullet {...props} /> },
  };
};
