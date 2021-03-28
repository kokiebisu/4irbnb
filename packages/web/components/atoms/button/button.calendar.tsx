/**
 * Renders the Calendar Button
 * @param {boolean} disabled
 * @param {number} number
 * @returns
 */
const CalendarButton: React.FC<{
  disabled?: boolean;
  number?: number;
}> = ({ disabled = false, number }) => {
  return (
    <div className="w-16 h-16">
      <div
        className={`h-full w-full flex justify-center items-center rounded-full`}
        // ].join(' ')} ${disabled && animation['hover-border--black']}`}
      >
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
