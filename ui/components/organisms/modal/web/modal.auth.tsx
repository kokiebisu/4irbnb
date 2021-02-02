/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, $Button } from "../../../atoms/button/web";
import { Prototype } from "@prototype/web/auth";
// import { useToggleDispatch } from "@context/toggle";
// import { useAuthDispatch, useAuthState } from "@context/auth";

/**
 * Renders the auth modal
 */
export const AuthModal: React.FC<{}> = () => {
  // const toggleDispatch = useToggleDispatch();
  // const authDispatch = useAuthDispatch();
  // const authState = useAuthState();
  return (
    <div>
      <div
        css={{
          height: 60,
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid white__2",
          padding: "0 24px",
        }}
      >
        <div
          css={{
            position: "relative",
            width: "100%",
          }}
        >
          <div
            css={{
              position: "absolute",
              left: 0,
              top: 3,
            }}
            sx={{ bg: "transparent" }}
          >
            {authState.title === "Forgot password" ? (
              <Button
                variant={$Button.MODAL}
                modal="back"
                onClick={() => authDispatch({ type: "auth_login" })}
              />
            ) : (
              <Button
                variant={$Button.MODAL}
                modal="close"
                onClick={() => toggleDispatch({ type: "close_register" })}
              />
            )}
          </div>
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 css={{ fontSize: 16 }}>{authState.title}</h3>
          </div>
        </div>
      </div>
      <Prototype variant={authState.display} />
    </div>
  );
};
