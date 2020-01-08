## Heap UI
> Component Library or Heap App

![npm (scoped)](https://img.shields.io/npm/v/@heapapp/ui) ![David](https://img.shields.io/david/dev/heapapp/heap-ui)  ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@heapapp/ui) [![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fheapapp%2Fheap-ui)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fheapapp%2Fheap-ui) [![Netlify Status](https://api.netlify.com/api/v1/badges/39cd6c51-a797-4653-866a-081650016104/deploy-status)](https://app.netlify.com/sites/heap-ui/deploys)


#### Installation
Using NPM
```
npm i -D @heapapp/ui
```
Using Yarn
```
yarn add -D @heapapp/ui
```

#### Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import {HeapThemeProvider, TextButton} from '@heapapp/ui'

const App = () => (
   <HeapThemeProvider>
      <TextButton type='solid' typeColor='blue.400'>
         Primary
      </TextButton>
   </HeapThemeProvider>
)

ReactDOM.render(<App/>, document.getElementById('root'))
```