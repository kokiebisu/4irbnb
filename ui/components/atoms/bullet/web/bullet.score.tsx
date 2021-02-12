/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

/**
 * Renders the score bullet
 * @param {string} category - Type of score bullet
 * @param {number} average - Average score
 */
export const ScoreBullet: React.FC<{
  category?: string;
  average?: number;
  reviews?: {
    imgUrl: string;
    name: string;
    date: string;
    description: string;
  }[];
}> = ({ category = "Aspect", average = 5.0 }) => {
  return (
    <div
      css={{
        padding: "2px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "50%",
      }}
    >
      <p css={{ fontWeight: 300, marginRight: 12 }}>{category}</p>
      <div css={{ display: "flex", alignItems: "flex-end", width: "100%" }}>
        <div>
          <div css={{ bg: "grey.400", position: "relative", height: 4 }}>
            <span
              css={{
                display: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                bg: "black",
                width: "50%",
              }}
            ></span>
          </div>
        </div>
        <p css={{ paddingRight: 16, fontSize: 12 }}>{average}</p>
      </div>
    </div>
  );
};
