import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tag } from '@heapapp/ui'

storiesOf('Tags', module).add('Tag', () => (
   <div>
      <Tag>JavaScript</Tag>
   </div>
))
