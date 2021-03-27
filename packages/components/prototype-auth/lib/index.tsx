/** @jsxRuntime classic */
/** @jsx jsx */
import { generateVariants } from './utils/variants'
import { jsx, ThemeProvider } from 'theme-ui'
import { PLATFORM } from './constant/platform'
import { webVariants } from './web/variants'
import { $PROTOTYPE } from './constant/appearance'
import { theme } from '@nextbnb/theme'

export { $PROTOTYPE }

export interface PrototypeProps {
  variant?: string
  place?: string
  stayType?: string | string[]
  characteristics?: string
  [property: string]: any
}

export const Prototype: React.FC<PrototypeProps> = ({
  platform = PLATFORM.web,
  variant = $PROTOTYPE.login,
  ...props
}) => {
  const variants = generateVariants(platform, webVariants, props)
  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{ ...variants[variant].css }}
        data-testid={`${variant}-auth-prototype`}
      >
        {variants[variant].component}
      </div>
    </ThemeProvider>
  )
}
