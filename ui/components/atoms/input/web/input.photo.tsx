/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { Upload } from "../../../public/svg/original";

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - handles key press event
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const PhotoInput: React.FC<{
  handleChange?: any;
  handleKeyPress?: any;
  value?: string;
}> = ({ handleChange, value }) => {
  return (
    <div style={{ height: 350 }}>
      <form css={{ height: "100%" }}>
        <input
          type="file"
          id="upload"
          css={{
            display: "none",
            height: "100%",
          }}
          onChange={handleChange}
        />
        <label htmlFor="upload" css={{ height: "100%" }}>
          <div
            css={{
              height: "100%",
              cursor: "pointer",
              padding: 15,
              border: "1px dashed lightgray",
            }}
          >
            <div
              css={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url(https://a0.muscache.com/airbnb/static/packages/upload-photos-ghosts.56fe723d.png)",
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
                    <div
                      css={{
                        padding: "14px 22px",
                        backgroundColor: "#FF5A5F",
                        borderRadius: 4,
                      }}
                    >
                      <div
                        css={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div css={{ marginRight: 8 }}>
                          <Upload width={20} stroke="white" />
                        </div>
                        <div>
                          <h3
                            css={{
                              fontSize: 14,
                              whiteSpace: "nowrap",
                              color: "white",
                            }}
                          >
                            Upload Photos
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div css={{ marginTop: 8 }}>
                    <h4 css={{ fontSize: 15, color: "grey.500" }}>
                      or drag them in
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
