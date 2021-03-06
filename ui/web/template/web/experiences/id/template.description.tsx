/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";

/**
 * Renders the description section
 * @param {string} mainDescription - The description under the main section
 * @param {string} spaceDescription - The description under the space section
 * @param {string} accessDescription - The description under the access section
 */
export const DescriptionTemplate: React.FC<{
  mainDescription?: string;
  spaceDescription?: string;
  accessDescription?: string;
  layoutType?: string;
}> = ({
  mainDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  spaceDescription,
  accessDescription,
  layoutType = "room",
}) => {
  const [display, setDisplay] = useState<boolean>(false);

  const changeLength = () => {
    setDisplay(!display);
  };

  const renderDescription = (description: string) => {
    const wordArray = description.split(" ");
    const newArray = [];
    for (let i = 0; i < 75; i++) {
      newArray.push(wordArray[i]);
    }
    return newArray;
  };

  const newArray = renderDescription(mainDescription);
  return (
    <div>
      {layoutType === "experience" && (
        <div css={{ margin: "16px 0" }}>
          <h3>What you'll do</h3>
        </div>
      )}
      {display ? (
        <div>
          <p
            css={{
              lineHeight: 1.5,
              fontWeight: 300,
              color: "grey.700",
            }}
          >
            {mainDescription}
          </p>
          {spaceDescription && (
            <div css={{ margin: "22px 0" }}>
              <h3
                css={{
                  fontSize: 16,
                  marginBottom: 6,
                  color: "grey.800",
                  fontWeight: 300,
                }}
              >
                The space
              </h3>
              <p
                css={{
                  fontWeight: 100,
                  color: "grey.700",
                }}
              >
                {spaceDescription}
              </p>
            </div>
          )}
          {accessDescription && (
            <div css={{ padding: "8px 0" }}>
              <h3
                css={{
                  fontSize: 16,
                  marginBottom: 6,
                  color: "grey.800",
                  fontWeight: 300,
                }}
              >
                Guest access
              </h3>
              <p css={{ fontWeight: 100, color: "grey.700" }}>
                {accessDescription}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <p
            css={{
              fontWeight: 300,
              marginLeft: 4,
              lineHeight: 1.5,
              color: "grey.700",
            }}
          >
            {`${newArray.join(" ")}...`}
            <span>
              <button
                onClick={() => {
                  setDisplay(true);
                  changeLength();
                }}
                css={{
                  marginLeft: 4,
                  fontSize: 16,
                  borderBottom: "grey.700",
                  color: "grey.700",
                  bg: "transparent",
                }}
              >
                read more
              </button>
            </span>
          </p>
        </div>
      )}
      {layoutType === "room" && (
        <div css={{ marginTop: 20 }}>
          <a
            onClick={() => {
              setDisplay(true);
              changeLength();
            }}
            css={{
              marginLeft: 4,
              borderBottom: "1px solid grey.700",
              color: "grey.700",
              bg: "transparent",
            }}
          >
            Contact host
          </a>
        </div>
      )}
    </div>
  );
};
