import color from '@styles/color.module.scss';
import shape from '@styles/shape.module.scss';

export const birthdates = {
  year: 'Year',
  month: 'Month',
  day: 'Day',
};

export const renderShape = (direction: string) => {
  switch (direction) {
    case 'left':
      return [color['b-r--white__3']].join(' ');
    case 'center':
      return [].join(' ');
    case 'right':
      return [color['b-l--white__3']].join(' ');
    default:
      return [color['b--white__3'], shape['br--10']].join(' ');
  }
};
