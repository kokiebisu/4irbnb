/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { MagnifyGlass } from '@nextbnb/design/assets/svg/original';
import { web, theme } from '../styles/button.searchbar';
import { $BUTTON } from '..';

/**
 * Renders the searchbar button component
 * @param {boolean} mini - Whether if the button is the minified version or not
 */
export const SearchbarButton: React.FC<{ mini?: boolean }> = ({
  mini = false,
}) => {
  const handlePress = () => {
    alert('searchbar button clicked');
  };
  return mini ? (
    <div css={web.mini.wrapper} sx={theme.wrapper}>
      <div>
        <p style={{ whiteSpace: 'nowrap' }} css={web.start.text}>
          Start your search
        </p>
      </div>
      <div>
        <div style={web.start.icon}>
          <MagnifyGlass width={12} height={12} stroke="white" strokeWidth={6} />
        </div>
      </div>
    </div>
  ) : (
    <div css={web.wrapper} sx={theme.wrapper}>
      <div css={web.search.icon.wrapper}>
        <MagnifyGlass width={15} stroke="black" strokeWidth={4} />
      </div>
      <div>
        <p css={web.search.label.text}>Search stays</p>
      </div>
    </div>
  );
};

export const searchbar = (props) => {
  return {
    [$BUTTON.searchbar]: {
      component: <SearchbarButton {...props} />,
      css: {
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 30,
        '&:hover': {
          boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
          transition: '0.3s all',
        },
      },
    },
  };
};
