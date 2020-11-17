import React from 'react';
import { useState } from 'react';

/**
 * Styles
 */
import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';

/**
 * Props
 */
import { DescriptionSectionProps } from './props';

/**
 * Renders the description section
 * @param {string} mainDescription - The description under the main section
 * @param {string} spaceDescription - The description under the space section
 * @param {string} accessDescription - The description under the access section
 */
export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  mainDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  spaceDescription,
  accessDescription,
  layoutType = 'room',
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
        <div className={[space['m-v--16']].join(' ')}>
          <h3>What you'll do</h3>
        </div>
      )}
      {display ? (
        <div>
          <p
            className={[
              font['lh--15'],
              font['weight--300'],
              color['c--gray__2'],
            ].join(' ')}>
            {mainDescription}
          </p>
          {spaceDescription && (
            <div className={[space['m-v--22']].join(' ')}>
              <h3
                className={[
                  font['size--16'],
                  space['m-b--6'],
                  color['c--gray__3'],
                  font['weight--300'],
                ].join(' ')}>
                The space
              </h3>
              <p
                className={[font['weight--100'], color['c--gray__2']].join(
                  ' '
                )}>
                {spaceDescription}
              </p>
            </div>
          )}
          {accessDescription && (
            <div className={[space['p-v--8']].join(' ')}>
              <h3
                className={[
                  font['size--16'],
                  space['m-b--6'],
                  color['c--gray__3'],
                  font['weight--300'],
                ].join(' ')}>
                Guest access
              </h3>
              <p
                className={[font['weight--100'], color['c--gray__2']].join(
                  ' '
                )}>
                {accessDescription}
              </p>
            </div>
          )}
        </div>
      ) : (
        <>
          <p
            className={[
              font['weight--300'],
              space['m-l--4'],
              font['lh--15'],
              color['c--gray__2'],
            ].join(' ')}>
            {`${newArray.join(' ')}...`}
            <span>
              <button
                onClick={() => {
                  setDisplay(true);
                  changeLength();
                }}
                className={[
                  space['m-l--4'],
                  font['size--16'],
                  color['b-b--gray__2'],
                  color['c--gray__2'],
                  color['bg--transparent'],
                ].join(' ')}>
                read more
              </button>
            </span>
          </p>
        </>
      )}
      {layoutType === 'room' && (
        <div className={[space['m-t--20']].join(' ')}>
          <a
            onClick={() => {
              setDisplay(true);
              changeLength();
            }}
            className={[
              space['m-l--4'],
              color['b-b--gray__2'],
              color['c--gray__2'],
              color['bg--transparent'],
            ].join(' ')}>
            Contact host
          </a>
        </div>
      )}
    </div>
  );
};
