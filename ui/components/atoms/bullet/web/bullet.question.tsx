/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const QuestionBullet: React.FC<{
  title?: string;
  answer?: string;
}> = ({ title = "Question here", answer = "Answer here" }) => {
  return (
    <div
      css={{
        padding: "16px 0",
        borderBottom: "1px solid",
        borderColor: "white__1",
      }}
    >
      <div>
        <h4 css={{ fontSize: 17, color: "darkgreen__3" }}>{title}</h4>
      </div>
      {/* <div>{answer}</div> */}
    </div>
  );
};
