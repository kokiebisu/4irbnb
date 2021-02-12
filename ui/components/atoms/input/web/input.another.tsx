/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Plus } from "../../../public/svg/original";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const AnotherInput: React.FC<{
  handleChange?: any;
  handleKeyPress?: any;
  value?: string;
}> = ({ handleChange, value }) => {
  return (
    <div
      css={{
        height: 130,
        padding: 15,
        border: "1px dashed",
        borderColor: "lightgray",
      }}
    >
      <form css={{ height: "100%" }}>
        <input
          type="file"
          id="upload"
          css={{ display: "none" }}
          onChange={handleChange}
        />
        <label htmlFor="upload" css={{ height: "100%" }}>
          <div
            css={{
              cursor: "pointer",
              height: "100%",
            }}
          >
            <div
              css={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                css={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  css={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div>
                      <div css={{ display: "flex", alignItems: "center" }}>
                        <Plus width={45} fill="#D8D8D8" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4
                      css={{
                        whitespace: "nowrap",
                        fontSize: 14,
                        color: "grey.400",
                      }}
                    >
                      Add another
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </form>
    </div>
  );
};
