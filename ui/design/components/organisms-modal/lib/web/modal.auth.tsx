/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, $Button } from "../../../atoms/button/web";
// import { $Prototype, Prototype } from "../../../../prototype/web/auth";

/**
 * Renders the auth modal
 * @param {function} toggleDispatch - Dispatch which handles the toggling
 * @param {function} authDispatch - Dispatch which handles the toggling
 * @param {function} authState - Context state which handles authentication
 */
export const AuthModal: React.FC<{
  toggleDispatch?: (params: any) => void;
  authDispatch?: (params: any) => void;
  title?: string;
  display?: string;
}> = ({
  toggleDispatch,
  authDispatch,
  title = "Forgot password",
  display = "login",
}) => {
  return (
    <div>
      <div
        css={{
          height: 60,
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
        }}
        sx={{
          borderBottom: "1px solid",
          borderColor: "grey.300",
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
            {title === "Forgot password" ? (
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
            <h3 css={{ fontSize: 16 }}>{title}</h3>
          </div>
        </div>
      </div>
      {/* <Prototype variant={$Prototype.LOGIN} /> */}
    </div>
  );
};
