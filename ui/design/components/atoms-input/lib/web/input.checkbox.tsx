/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { CheckPlain } from "@nextbnb/design/assets/svg/original";

export const CheckboxInput: React.FC<{
  check?: () => void;
  checked?: boolean;
  title?: string;
  description?: string;
}> = ({ check, checked = true, title = "Title here", description }) => {
  return (
    <div css={{ display: "flex" }}>
      <div css={{ marginRight: 16 }}>
        <div
          onClick={check}
          style={{ cursor: "pointer", height: 24, width: 24 }}
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid",
            borderColor: "grey.400",
            borderRadius: 4,
          }}
          sx={{ ...(checked ? { bg: "black" } : { bg: "white" }) }}
        >
          <div
            css={{
              position: "relative",
              padding: 12,
              bottom: 1,
            }}
          >
            <CheckPlain width={15} stroke="white" strokeWidth={5} />
          </div>
        </div>
      </div>
      <div css={{ position: "relative", top: 2 }}>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <h4 css={{ fontSize: 14, color: "grey.500" }}>{description}</h4>
        </div>
      </div>
    </div>
  );
};
