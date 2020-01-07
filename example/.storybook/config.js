import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'
import { withA11y } from '@storybook/addon-a11y'

import { HeapThemeProvider } from '@heapapp/ui'
import '../src/global.css'

const heapTheme = {
   ...themes.dark,
   appBg: '#19191C',
   appContentBg: '#1F1F23',
   barBg: '#1F1F23'
}

const ThemeDecorator = storyFn => (
   <HeapThemeProvider>{storyFn()}</HeapThemeProvider>
)

addDecorator(ThemeDecorator)
addDecorator(withA11y)

addParameters({
   options: {
      showNav: true,
      showPanel: true,
      panelPosition: 'bottom',
      theme: heapTheme
   }
})

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
