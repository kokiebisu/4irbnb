/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import { PLATFORM } from "./constant/platform";
import { generateVariants } from "./utils/variants";
import { variants as webVariants } from "./web/variants";
import { $PANEL } from "./constant/appearance";
import { theme } from "@nextbnb/theme";

export { $PANEL };

export interface PanelProps {
  variant: string;
  extendsTo?: string;
  [property: string]: any;
}

export const Panel: React.FC<PanelProps> = ({
  platform = PLATFORM.web,
  variant = $PANEL.experience,
  extendsTo,
  ...props
}) => {
  const variants = generateVariants(PLATFORM[platform], webVariants, props);
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ ...variants[variant].css }} data-testid={`${variant}-panel`}>
        {variants[variant].component}
      </div>
    </ThemeProvider>
  );
};
