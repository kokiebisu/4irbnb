/** styles */
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";

export const QuestionBullet: React.FC<{
  title?: string;
  answer?: string;
}> = ({ title = "Question here", answer = "Answer here" }) => {
  return (
    <div className={[space["p-v--16"], color["b-b--white__1"]].join(" ")}>
      <div>
        <h4 className={[font["size--17"], color["c--darkgreen__3"]].join(" ")}>
          {title}
        </h4>
      </div>
      {/* <div>{answer}</div> */}
    </div>
  );
};
