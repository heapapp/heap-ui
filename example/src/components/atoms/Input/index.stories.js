import React from 'react'
import { storiesOf } from '@storybook/react'

import { Input, FormItem } from '@heapapp/ui'

storiesOf('Form', module).add('Text', () => {
   const [input, setInput] = React.useState('')
   return (
      <FormItem>
         <Input
            type='text'
            value={input}
            placeholder='Enter the text'
            onChange={e => setInput(e.target.value)}
         />
      </FormItem>
   )
})

storiesOf('Form', module).add('Password', () => {
   const [input, setInput] = React.useState('')
   return (
      <FormItem>
         <Input
            value={input}
            type='password'
            placeholder='Enter the password'
            onChange={e => setInput(e.target.value)}
         />
      </FormItem>
   )
})
