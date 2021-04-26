import { Icon } from '@icons';
import { BarButtonTemplate } from './template';

export interface BarButtonProps {
  barType?: 'menu' | 'saved' | 'login';
  selected?: boolean;
}

const BarButton: React.FC<BarButtonProps> = ({ barType, selected }) => {
  const types = {
    menu: {
      icon: {
        variant: 'general',
        generalType: 'explore',
        stroke: selected ? 'red' : '#737373',
      },
      name: 'Explore',
    },
    saved: {
      icon: {
        variant: 'semantic',
        semanticType: 'saved' as const,
        fill: selected ? 'red' : '#737373',
      },
      name: 'Saved',
    },
    login: {
      icon: {
        variant: 'general' as const,
        generalType: 'login' as const,
        fill: selected ? 'red' : '#737373',
      },
      name: 'Log in',
    },
  };
  const data = types[barType];
  return <BarButtonTemplate {...data} />;
};

export const bar = (props) => {
  return {
    bar: {
      component: <BarButton {...props} />,
    },
  };
};
