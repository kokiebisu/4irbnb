import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '@nextbnb/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
