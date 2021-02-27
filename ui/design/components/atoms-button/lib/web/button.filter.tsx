/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { web, theme } from '../styles/button.filter';
import { $Button } from '..';

/**
 * Renders the filter button
 * @param {string} name - Name of the filter button
 */
export const FilterButton: React.FC<{ label?: string; inverse?: boolean }> = ({
  label = 'Button',
  inverse = false,
}) => {
  return (
    <div
      css={{
        ...web.wrapper,
      }}
      sx={{
        ...(inverse ? theme.inverse.wrapper : theme.plain.wrapper),
      }}
    >
      <p css={web.label.text}>{label}</p>
    </div>
  );
};

export const filter = (props) => {
  return {
    [$Button.FILTER]: {
      component: <FilterButton {...props} />,
      css: {},
    },
  };
};
