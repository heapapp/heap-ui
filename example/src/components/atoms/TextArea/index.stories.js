import React from 'react'
import { storiesOf } from '@storybook/react'

import { TextArea, FormItem } from '@heapapp/ui'

storiesOf('Form', module).add('Text Area', () => {
   const [input, setInput] = React.useState('')
   return (
      <FormItem>
         <TextArea
            value={input}
            placeholder='Enter the value'
            onChange={e => setInput(e.target.value)}
         />
      </FormItem>
   )
})
