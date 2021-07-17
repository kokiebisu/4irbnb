import { BookingModalTemplate, BookingModalTemplateProps } from "./template";

export type BookingModalProps = BookingModalTemplateProps;

export const BookingModal = (props: BookingModalProps): JSX.Element => {
  return <BookingModalTemplate {...props} />;
};
