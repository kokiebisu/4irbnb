import { ExistsPrototypeTemplateProps } from './template';

export interface ExistsPrototypeProps extends ExistsPrototypeTemplateProps {}

export const ExistsPrototype: React.FC<ExistsPrototypeProps> = (props) => {
  return <ExistsPrototype {...props} />;
};

export const exists = (props) => {
  return {
    exists: {
      component: <ExistsPrototype {...props} />,
    },
  };
};
