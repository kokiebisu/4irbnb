/** @jsxRuntime classic */
/** @jsx jsx */
import { $BUTTON } from '../constants/appearance';
import { jsx } from 'theme-ui';
import { web } from '../styles/button.calendar';

const CalendarButton: React.FC<{
  disabled?: boolean;
  number?: number;
}> = ({ disabled = false, number = 0 }) => {
  return (
    <div css={web.wrapper}>
      <div
        css={{
          ...web.label.wrapper,
          ...(disabled && web.disabled.label.wrapper),
        }}
      >
        <h3 css={{ ...web.label.text, ...web.disabled.label.text }}>
          {number}
        </h3>
      </div>
    </div>
  );
};

export const calendar = (props) => {
  return {
    [$BUTTON.calendar]: {
      component: <CalendarButton {...props} />,
      css: {},
    },
  };
};
