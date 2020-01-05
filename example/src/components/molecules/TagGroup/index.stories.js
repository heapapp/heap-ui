import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tag, TagGroup } from '@heapapp/ui'

storiesOf('Tags', module).add('TagGroup', () => (
   <div>
      <TagGroup maxWidth='380'>
         <Tag>JavaScript</Tag>
         <Tag>Python</Tag>
         <Tag>NodeJs</Tag>
         <Tag>GraphQL</Tag>
         <Tag>PostgreSQL</Tag>
         <Tag>Apollo GraphQL</Tag>
      </TagGroup>
   </div>
))
