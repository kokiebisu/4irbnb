import { CreateBarTemplate } from './template';

const CreateBar = (props) => {
  return <CreateBarTemplate {...props} />;
};

export const create = (props) => {
  return {
    create: {
      component: <CreateBar {...props} />,
    },
  };
};
