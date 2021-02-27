/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { web, theme } from '../styles/button.destination';
import { $Button } from '..';

export const DestinationButton: React.FC<{
  city?: String;
  location?: String;
}> = ({ city = 'City', location = 'Location' }) => {
  return (
    <div css={web.wrapper}>
      <div>
        <h4 style={{ textAlign: 'left' }} css={web.city.text}>
          {city}
        </h4>
      </div>
      <div>
        <h4 style={{ textAlign: 'left' }} css={web.location.text}>
          {location}
        </h4>
      </div>
    </div>
  );
};

export const destination = (props) => {
  return {
    [$Button.DESTINATION]: {
      component: <DestinationButton {...props} />,
      css: {},
    },
  };
};
