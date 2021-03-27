/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { generateVariants } from './utils/variants'
import { PLATFORM } from './constant/platform'
import { $PROTOTYPE } from './constant/appearance'
import { webVariants } from './web/variants'
import { theme } from '@nextbnb/theme'
export { $PROTOTYPE }

export interface CreateProps {
  variant?: string
  [property: string]: any
}

export const Prototype: React.FC<CreateProps> = ({
  platform = PLATFORM.web,
  variant = $PROTOTYPE.getstarted,
  ...props
}) => {
  const variants = generateVariants(platform, webVariants, props)
  return (
    <ThemeProvider theme={theme}>
      <div data-testid={`${variant}-create-prototype`}>
        {variants[variant].component}
      </div>
    </ThemeProvider>
  )
}
