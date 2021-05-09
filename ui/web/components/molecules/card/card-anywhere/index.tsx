import { AnywhereCardTemplate } from './template';

/**
 * Presentational Component
 * @param props
 * @returns
 */
export const AnywhereCard = (props) => {
  return <AnywhereCardTemplate {...props} />;
};

export const anywhere = (props) => {
  return {
    anywhere: {
      component: <AnywhereCard {...props} />,
    },
  };
};
