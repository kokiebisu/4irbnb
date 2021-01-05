/** styles */
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

/** components */
import { Button } from "@button";
import { Prototype as AuthPrototype } from "@prototype/auth";

/** contexts */
import { useToggleDispatch } from "@context/toggle";
import { useAuthDispatch, useAuthState } from "@context/auth";

/**
 * Renders the auth modal
 */
export const AuthModal: React.FC<{}> = () => {
  const toggleDispatch = useToggleDispatch();
  const authDispatch = useAuthDispatch();
  const authState = useAuthState();
  return (
    <div>
      <div
        style={{ height: 60 }}
        className={[
          layout["flex"],
          layout["items-center"],
          color["b-b--white__2"],
          space["p-h--24"],
        ].join(" ")}
      >
        <div className={[layout["relative"], shape["w--full"]].join(" ")}>
          <div
            className={[
              layout["al--0"],
              layout["t---3"],
              color["bg--transparent"],
            ].join(" ")}
          >
            {authState.title === "Forgot password" ? (
              <Button
                variant="modal"
                modal="back"
                onClick={() => authDispatch({ type: "auth_login" })}
              />
            ) : (
              <Button
                variant="modal"
                modal="close"
                onClick={() => toggleDispatch({ type: "close_register" })}
              />
            )}
          </div>
          <div className={[layout["all-center"]].join(" ")}>
            <h3 className={[font["size--16"]].join(" ")}>{authState.title}</h3>
          </div>
        </div>
      </div>
      <AuthPrototype variant={authState.display} />
    </div>
  );
};
