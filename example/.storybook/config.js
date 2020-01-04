import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'

import { HeapThemeProvider } from '@heapapp/ui'

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

addParameters({
   options: {
      theme: heapTheme
   }
})

configure(require.context('../src', true, /\.stories\.js$/), module)
