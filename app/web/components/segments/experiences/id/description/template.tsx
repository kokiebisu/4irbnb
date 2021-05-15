import { useState } from 'react';

export interface DescriptionSegmentTemplateProps {
  mainDescription?: string;
  spaceDescription?: string;
  accessDescription?: string;
  layoutType?: string;
}

/**
 * Renders the description section
 * @param {string} mainDescription - The description under the main section
 * @param {string} spaceDescription - The description under the space section
 * @param {string} accessDescription - The description under the access section
 * @param {string} layoutType
 */
export const DescriptionSegmentTemplate: React.FC<DescriptionSegmentTemplateProps> = ({
  mainDescription,
  spaceDescription,
  accessDescription,
  layoutType,
}) => {
  const [display, setDisplay] = useState<boolean>(false);

  const changeLength = () => {
    setDisplay(!display);
  };

  const renderDescription = (description: string) => {
    const wordArray = description.split(' ');
    const newArray = [];
    for (let i = 0; i < 75; i++) {
      newArray.push(wordArray[i]);
    }
    return newArray;
  };

  const newArray = renderDescription(mainDescription);
  return (
    <div>
      {layoutType === 'experience' && (
        <div className="my-4">
          <h3>What you'll do</h3>
        </div>
      )}
      {display ? (
        <div>
          <p className="leading-6 font-light text-gray-700">
            {mainDescription}
          </p>
          {spaceDescription && (
            <div className="my-4">
              <h3 className="text-lg mb-2 text-gray-800 font-light">
                The space
              </h3>
              <p className="font-thin text-gray-700">{spaceDescription}</p>
            </div>
          )}
          {accessDescription && (
            <div className="py-2">
              <h3 className="text-lg mb-2 text-gray-800 font-light">
                Guest access
              </h3>
              <p className="font-light text-gray-700">{accessDescription}</p>
            </div>
          )}
        </div>
      ) : (
        <>
          <p className="font-light ml-1 leading-6 text-gray-700">
            {`${newArray.join(' ')}...`}
            <span>
              <button
                onClick={() => {
                  setDisplay(true);
                  changeLength();
                }}
                className="ml-1 text-lg border-b border-gray-700 text-gray-700 bg-transparent"
              >
                read more
              </button>
            </span>
          </p>
        </>
      )}
      {layoutType === 'room' && (
        <div className="mt-4">
          <a
            onClick={() => {
              setDisplay(true);
              changeLength();
            }}
            className="ml-1 border-b border-gray-700 text-gray-700 bg-transparent"
          >
            Contact host
          </a>
        </div>
      )}
    </div>
  );
};
