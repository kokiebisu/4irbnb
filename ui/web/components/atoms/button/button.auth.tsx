import { web } from "@airbnb/design/src/primitives";
import { web as webStyles } from "@airbnb/design/src/components/atoms/button/button.auth";

/**
 * Renders the auth button component
 * @param {string} auth - Platform for the authentication
 */
export const AuthButton: React.FC<{ icon?: any; name?: string }> = ({
  icon,
  name = "Email",
}) => {
  return (
    <div className={[layout["relative"], layout["all-center"]].join(" ")}>
      <div className={[layout["al--0"]].join(" ")}>{icon}</div>
      <div>
        <h3 className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          Continue with {name}
        </h3>
      </div>
    </div>
  );
};
