export interface CalendarButtonProps {
  disabled?: boolean;
  number?: number;
}

/**
 * Renders the Calendar Button
 * @param {boolean} disabled
 * @param {number} number
 * @returns
 */
export const CalendarButton: React.FC<CalendarButtonProps> = ({
  disabled,
  number,
}) => {
  return (
    <div className="w-16 h-16">
      <div className="h-full w-full flex justify-center items-center rounded-full">
        <h3 className={`${disabled ? 'text-black' : 'text-gray-100'} text-xs`}>
          {number}
        </h3>
      </div>
    </div>
  );
};

export const calendar = (props) => {
  return {
    calendar: {
      component: <CalendarButton {...props} />,
      style: '',
    },
  };
};
