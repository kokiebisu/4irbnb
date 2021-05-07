import { GuestsModalTemplate, GuestsModalTemplateProps } from './template';

export interface GuestsModalProps extends GuestsModalTemplateProps {}

export const GuestsModal: React.FC<GuestsModalProps> = (props) => {
  return <GuestsModalTemplate {...props} />;
};

export const Guests = (props) => {
  return {
    guests: {
      component: <GuestsModal {...props} />,
    },
  };
};
