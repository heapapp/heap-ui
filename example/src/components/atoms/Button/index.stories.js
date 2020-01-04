import React from 'react'
import { storiesOf } from '@storybook/react'

import { TextButton, IconButton, ComboButton } from '@heapapp/ui'

import { LikeIcon, GearsIcon, HeartIcon } from '../../../assets/icons'

storiesOf('Button/Text Button', module)
   .add('Solid', () => (
      <div>
         <TextButton type='solid' typeColor='blue.400'>
            Primary
         </TextButton>
         <TextButton type='solid' typeColor='dark.200'>
            Secondary
         </TextButton>
         <TextButton type='solid' typeColor='danger'>
            Danger
         </TextButton>
         <TextButton type='solid' typeColor='success'>
            Success
         </TextButton>
      </div>
   ))
   .add('Outline', () => (
      <div>
         <TextButton type='outline' typeColor='blue.400'>
            Primary
         </TextButton>
         <TextButton type='outline' typeColor='dark.200'>
            Secondary
         </TextButton>
         <TextButton type='outline' typeColor='danger'>
            Danger
         </TextButton>
         <TextButton type='outline' typeColor='success'>
            Success
         </TextButton>
      </div>
   ))

storiesOf('Button', module).add('Icon Button', () => (
   <div>
      <IconButton>
         <LikeIcon />
      </IconButton>
      <IconButton>
         <GearsIcon />
      </IconButton>
      <IconButton>
         <HeartIcon />
      </IconButton>
   </div>
))

storiesOf('Button/Combo Button', module)
   .add('Icon on Left', () => (
      <div>
         <ComboButton type='solid' typeColor='blue.400'>
            <LikeIcon />
            Like
         </ComboButton>
         <ComboButton type='outline' typeColor='blue.400'>
            <GearsIcon />
            Settings
         </ComboButton>
      </div>
   ))
   .add('Icon on Right', () => (
      <div>
         <ComboButton type='solid' typeColor='blue.400'>
            Favourites
            <HeartIcon />
         </ComboButton>
         <ComboButton type='outline' typeColor='blue.400'>
            Account Settings
            <GearsIcon />
         </ComboButton>
      </div>
   ))
