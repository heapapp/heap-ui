import React from 'react'
import { storiesOf } from '@storybook/react'

import { TextButton, IconButton, ComboButton, ButtonGroup } from '@heapapp/ui'

import { LikeIcon, GearsIcon, HeartIcon } from '../../../assets/icons'

storiesOf('Button/Text Button', module)
   .add('Solid', () => (
      <ButtonGroup align='left'>
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
      </ButtonGroup>
   ))
   .add('Outline', () => (
      <ButtonGroup align='left'>
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
      </ButtonGroup>
   ))

storiesOf('Button', module).add('Icon Button', () => (
   <ButtonGroup align='left'>
      <IconButton>
         <LikeIcon />
      </IconButton>
      <IconButton>
         <GearsIcon />
      </IconButton>
      <IconButton>
         <HeartIcon />
      </IconButton>
   </ButtonGroup>
))

storiesOf('Button/Combo Button', module)
   .add('Icon on Left', () => (
      <ButtonGroup align='left'>
         <ComboButton type='solid' typeColor='blue.400'>
            <LikeIcon />
            Like
         </ComboButton>
         <ComboButton type='outline' typeColor='blue.400'>
            <GearsIcon />
            Settings
         </ComboButton>
      </ButtonGroup>
   ))
   .add('Icon on Right', () => (
      <ButtonGroup align='left'>
         <ComboButton type='solid' typeColor='blue.400'>
            Favourites
            <HeartIcon />
         </ComboButton>
         <ComboButton type='outline' typeColor='blue.400'>
            Account Settings
            <GearsIcon />
         </ComboButton>
      </ButtonGroup>
   ))
