export type CalendarButtonTemplateProps = {
  disabled: boolean;
  number: number;
  onClick: () => void;
};

/**
 * Renders the Calendar Button
 * @param {boolean} disabled
 * @param {number} number
 * @returns
 */
export const CalendarButtonTemplate = ({
  disabled,
  number,
  onClick,
}: CalendarButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="calendar-button"
      className="inline-block"
      onClick={onClick}
    >
      <div className="w-16 h-16">
        <div className="h-full w-full flex justify-center items-center rounded-full">
          <h3
            className={`${disabled ? 'text-black' : 'text-gray-100'} text-xs`}
          >
            {number}
          </h3>
        </div>
      </div>
    </button>
  );
};
