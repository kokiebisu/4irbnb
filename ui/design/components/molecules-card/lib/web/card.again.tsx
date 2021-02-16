/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Warning } from "@nextbnb/design/assets/svg/original";

export const AgainCard: React.FC<{}> = () => {
  return (
    <div
      css={{ borderRadius: 15 }}
      sx={{ border: "1px solid", borderColor: "grey.400" }}
    >
      <div css={{ padding: 18 }}>
        <div css={{ display: "flex" }}>
          <div css={{ marginRight: 12 }}>
            <div
              css={{ padding: 12, borderRadius: "9999px" }}
              sx={{ bg: "red.800" }}
            >
              <Warning width={18} fill="white" />
            </div>
          </div>
          <div>
            <div css={{ marginBottom: 4 }}>
              <h3 css={{ fontSize: 16 }}>Let's try that again</h3>
            </div>
            <div>
              <p css={{ fontSize: 14 }} sx={{ color: "grey.600" }}>
                There isn’t an account associated with this email address.
                Please try another email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
