/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";
import { MagnifyGlass } from "@nextbnb/design/assets/svg/original";

import { searchbar } from "../styles/button.searchbar";

const { web, theme } = searchbar;

/**
 * Renders the searchbar button component
 * @param {boolean} mini - Whether if the button is the minified version or not
 */
export const SearchbarButton: React.FC<{ mini?: boolean }> = ({
  mini = false,
}) => {
  const handlePress = () => {
    alert("searchbar button clicked");
  };
  return mini ? (
    <div css={web.mini.wrapper}>
      <div>
        <p style={{ whiteSpace: "nowrap" }} css={web.start.text}>
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
    <motion.button
      whileTap={{ scale: 0.98 }}
      data-testid="button"
      css={web.wrapper}
      onClick={handlePress}
    >
      <div css={web.search.icon.wrapper}>
        <MagnifyGlass width={15} stroke="black" strokeWidth={4} />
      </div>
      <div>
        <p css={web.search.label.text}>Search stays</p>
      </div>
    </motion.button>
  );
};
