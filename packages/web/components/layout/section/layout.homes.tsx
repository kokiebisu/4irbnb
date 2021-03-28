/** styles */
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

export const HomesLayout: React.FC<{
  title?: string;
  children?: React.ReactNode;
  spread?: boolean;
}> = ({ title = "Title here", children, spread = false }) => {
  return (
    <div className={[space["p-v--32"]].join(" ")}>
      <div>
        <div>
          <div className={[space["m-b--32"]].join(" ")}>
            {title && (
              <h1 className={`${[font["size--40"]].join(" ")} `}>{title}</h1>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
