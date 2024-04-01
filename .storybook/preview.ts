import type { Preview } from '@storybook/react'
import GlobalStyles from '../src/styles/global-styles'

import { withThemeFromJSXProvider } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles
    })
  ]
}

export default preview
