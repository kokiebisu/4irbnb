import {
  CalendarButtonTemplate,
  CalendarButtonTemplateProps,
} from './template';

export interface CalendarButtonProps extends CalendarButtonTemplateProps {}

export const CalendarButton: React.FC<CalendarButtonProps> = ({ ...props }) => {
  return <CalendarButtonTemplate {...props} />;
};
