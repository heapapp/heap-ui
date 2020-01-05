import React from 'react'
import { storiesOf } from '@storybook/react'

import { Anchor } from '@heapapp/ui'

storiesOf('Typography', module).add('Link', () => (
   <div>
      <Anchor>It's Link</Anchor>
   </div>
))
