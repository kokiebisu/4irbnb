import { useBookingModal } from "./logic";
import { BookingModalTemplate, BookingModalTemplateProps } from "./template";

export type BookingModalProps = BookingModalTemplateProps;

export const BookingModal = (props: BookingModalProps): JSX.Element => {
  const data = useBookingModal();
  return <BookingModalTemplate {...props} {...data} />;
};
