import { CreateBarTemplate } from './template';

const CreateBar = (props) => {
  return (
    <div data-testid="bar-create--organism">
      <CreateBarTemplate {...props} />
    </div>
  );
};

export const create = (props) => {
  return {
    create: {
      component: <CreateBar {...props} />,
    },
  };
};
