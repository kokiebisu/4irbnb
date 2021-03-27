/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { $BAR } from './constant/appearance'
import { webVariants } from './web/variants'
import { generateVariants } from './utils/variants'
import { PLATFORM } from './constant/platform'
import { theme } from '@nextbnb/theme'

export { $BAR }

export interface BarProps {
  variant: string
  [property: string]: any
}

/**
 * Bundles the bar components
 * @param {string} type - Specifies the type of bar component
 */
export const Bar: React.FC<BarProps> = ({
  platform = PLATFORM.web,
  variant = $BAR.availability,
  ...props
}) => {
  const variants = generateVariants(PLATFORM[platform], webVariants, props)

  return (
    <ThemeProvider theme={theme}>
      <div sx={{ ...variants[variant].css }} data-testid={`${variant}-bar`}>
        {variants[variant].component}
      </div>
    </ThemeProvider>
  )
}
