/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Bullet, $Bullet } from "@airbnb/components/web";

/**
 * Renders the help section
 */
export const HelpTemplate: React.FC<{}> = () => {
  const helps = ["support", "tools", "insights", "education"];
  return (
    <div
      css={{
        display: ["block", "block", "flex"],
      }}
    >
      <div
        css={{
          marginBottom: 64,
          width: ["100%", "100%", "50%"],
        }}
      >
        <h1
          css={{
            fontSize: 40,
          }}
        >
          We're here to help
        </h1>
      </div>
      <div
        css={{
          width: ["100%", "100%", "50%"],
        }}
      >
        <div>
          {helps.map((help, index) => {
            return (
              <div
                key={index}
                css={{
                  marginBottom: 24,
                }}
              >
                <Bullet variant={$Bullet.HELP} help={help} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
