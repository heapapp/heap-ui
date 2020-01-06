import React from 'react'
import { storiesOf } from '@storybook/react'

import { ButtonGroup, TextButton, IconButton } from '@heapapp/ui'

import { HeartIcon } from '../../../assets/icons'

storiesOf('Button', module).add('Button Group', () => (
   <div>
      <ButtonGroup align='left'>
         <TextButton type='solid' typeColor='blue.400'>
            Watch Video
         </TextButton>
         <TextButton type='outline' typeColor='dark.200'>
            Watch on Youtube
         </TextButton>
         <IconButton>
            <HeartIcon />
         </IconButton>
      </ButtonGroup>
   </div>
))
