import React from 'react'
import { storiesOf } from '@storybook/react'

import { Heading } from '@heapapp/ui'

storiesOf('Typography', module).add('Heading', () => (
   <div>
      <Heading type='h1'>Heading 1</Heading>
      <Heading type='h2'>Heading 2</Heading>
      <Heading type='h3'>Heading 3</Heading>
      <Heading type='h4'>Heading 4</Heading>
      <Heading type='h5'>Heading 5</Heading>
   </div>
))
