import {
  CalendarButtonTemplate,
  CalendarButtonTemplateProps,
} from "./template";

export type CalendarButtonProps = CalendarButtonTemplateProps;

export const CalendarButton = ({
  ...props
}: CalendarButtonProps): JSX.Element => <CalendarButtonTemplate {...props} />;
