import { MenuBarLogo } from '@svg/logo';
import { Login, Saved } from '@svg/regular';

const BarButton = ({ type = 'menu', selected = 'menu' }) => {
  const types = {
    menu: {
      component: <MenuBarLogo width={25} />,
      name: 'Explore',
      selected: selected === 'menu',
    },
    saved: {
      component: <Saved width={25} />,
      name: 'Saved',
      selected: selected === 'saved',
    },
    login: {
      component: <Login width={25} />,
      name: 'Log in',
      selected: selected === 'login',
    },
  };

  return (
    <div
      className={
        types['menu'].selected
          ? [menubar['menubar__item'], menubar['selected']].join(' ')
          : menubar['menubar__item']
      }
    >
      <div className={menubar['menubar__item--logo']}>
        {types['menu'].component}
      </div>
      <div className={menubar['menubar__item--text']}>
        <p>{types['menu'].name}</p>
      </div>
    </div>
  );
};

export const bar = (props) => {
  return {
    bar: {
      component: <BarButton {...props} />,
      style: '',
    },
  };
};
