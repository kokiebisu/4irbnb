import { ListingModalTemplate, ListingModalTemplateProps } from './template';

export interface ListingModalProps extends ListingModalTemplateProps {}

export const ListingModal: React.FC<ListingModalProps> = (props) => {
  return <ListingModalTemplate {...props} />;
};

export const Listing = (props) => {
  return {
    listing: {
      component: <ListingModal {...props} />,
    },
  };
};
