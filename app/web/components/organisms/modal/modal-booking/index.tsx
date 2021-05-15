import { BookingModalTemplate, BookingModalTemplateProps } from './template';

export interface BookingModalProps extends BookingModalTemplateProps {}

export const BookingModal: React.FC<BookingModalProps> = (props) => {
  return <BookingModalTemplate {...props} />;
};

export const booking = (props) => {
  return {
    booking: {
      component: <BookingModal {...props} />,
    },
  };
};
