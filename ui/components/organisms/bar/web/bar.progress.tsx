/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

/**
 * Renders the Progress Bar
 * @param {number} percentage - percentage of the progress bar
 */
export const ProgressBar: React.FC<{
  percentage?: number;
}> = ({ percentage = 50 }) => {
  return (
    <div
      css={{
        position: "relative",
        width: "100%",
        height: 10,
        backgroundColor: "#EDEFED",
        zIndex: 1,
      }}
    >
      <div css={{ width: "100%", height: 10, display: "flex", zIndex: 500 }}>
        {Array.from(Array(24).keys()).map((_, index) => {
          return (
            <div
              key={index}
              css={{
                width: "10%",
                height: 10,
                backgroundColor: "transparent",
                ...(index === 23
                  ? { borderRight: "none" }
                  : { borderRight: "1px solid #DCE0E0" }),
              }}
            />
          );
        })}
        <div
          css={{
            position: "absolute",
            height: "100%",
            width: `${percentage}%`,
            borderTopRightRadius: 9999,
            borderBottomRightRadius: 9999,
            backgroundColor: "#278489",
            zIndex: 60,
          }}
        ></div>
      </div>
    </div>
  );
};
