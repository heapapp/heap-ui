import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select, FormItem } from '@heapapp/ui'

storiesOf('Form', module).add('Select', () => {
   const [selected, setSelected] = React.useState('')
   const [options] = React.useState([
      { id: 1, title: 'Option 1' },
      { id: 2, title: 'Option 2' },
      { id: 3, title: 'Option 3' },
      { id: 4, title: 'Option 4' },
      { id: 5, title: 'Option 5' },
      { id: 6, title: 'Option 6' }
   ])

   const onSelect = option => setSelected(option)
   return (
      <FormItem>
         <Select
            options={options}
            selected={selected}
            onSelect={onSelect}
            placeholder='Select Topic'
         />
      </FormItem>
   )
})
