/** styles */
import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';
import font from '@styles/font.module.scss';

export const QuestionBullet: React.FC<{
  title?: string;
  answer?: string;
}> = ({ title = 'Question here', answer = 'Answer here' }) => {
  return (
    <div className="py-4 border-b border-gray-100">
      <div>
        <h4 className="text-lg text-green-600">{title}</h4>
      </div>
      {/* <div>{answer}</div> */}
    </div>
  );
};
