/** @jsxRuntime classic */
/** @jsx jsx */
import { $BUTTON } from '../constants/appearance';
import { jsx } from 'theme-ui';
import { web, theme } from '../styles/button.globe';

const GlobeButton: React.FC<{
  language?: string;
  region?: string;
  selected?: boolean;
}> = ({ language = 'Language', region = 'Region', selected = false }) => {
  return (
    <div
      sx={{ ...web.wrapper }}
      css={{ ...(selected && web.selected.wrapper) }}
    >
      <div>
        <p css={web.language.text}>{language}</p>
      </div>
      <div>
        <p style={{ textAlign: 'left' }} css={web.region.text}>
          {region}
        </p>
      </div>
    </div>
  );
};

export const globe = (props) => {
  return {
    [$BUTTON.globe]: {
      component: <GlobeButton {...props} />,
      css: {},
    },
  };
};
