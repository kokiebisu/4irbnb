import { AddressInputTemplate } from './template';

export const AddressInput = ({ ...props }) => {
  return <AddressInputTemplate {...props} />;
};

export const address = (props) => {
  return {
    address: {
      component: <AddressInput {...props} />,
    },
  };
};
