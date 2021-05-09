import { CalendarButtonTemplate } from './template';

export interface CalendarButtonProps {}

export const CalendarButton: React.FC<CalendarButtonProps> = ({ ...props }) => {
  return <CalendarButtonTemplate {...props} />;
};

export const calendar = (props) => {
  return {
    calendar: {
      component: <CalendarButton {...props} />,
    },
  };
};
