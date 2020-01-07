import React from 'react'
import { storiesOf } from '@storybook/react'

import { Input, InputError, FormItem, Label, TextArea } from '@heapapp/ui'

storiesOf('Form/All Fields', module).add('Normal', () => {
   const [form, setForm] = React.useState({
      username: '',
      email: '',
      password: '',
      description: ''
   })

   const handleChange = e => {
      const { value, name } = e.target
      setForm(form => ({
         ...form,
         [name]: value
      }))
   }

   return (
      <div style={{ width: '320px' }}>
         <FormItem>
            <Label htmlFor='username'>Username</Label>
            <Input
               type='text'
               name='username'
               value={form.username}
               placeholder='Enter the username'
               onChange={e => handleChange(e)}
            />
         </FormItem>
         <FormItem>
            <Label htmlFor='email'>Email</Label>
            <Input
               type='email'
               name='email'
               value={form.email}
               placeholder='Enter the email'
               onChange={e => handleChange(e)}
            />
         </FormItem>
         <FormItem>
            <Label htmlFor='password'>Password</Label>
            <Input
               type='password'
               name='password'
               value={form.password}
               placeholder='Enter the password'
               onChange={e => handleChange(e)}
            />
         </FormItem>
         <FormItem>
            <Label htmlFor='description'>Description</Label>
            <TextArea
               name='description'
               value={form.description}
               placeholder='Enter the description'
               onChange={e => handleChange(e)}
            />
         </FormItem>
      </div>
   )
})

storiesOf('Form/All Fields', module).add('With Error', () => {
   const [form, setForm] = React.useState({
      username: '',
      email: '',
      password: ''
   })

   const handleChange = e => {
      const { value, name } = e.target
      setForm(form => ({
         ...form,
         [name]: value
      }))
   }

   return (
      <div style={{ width: '320px' }}>
         <FormItem>
            <Label htmlFor='username'>Username</Label>
            <Input
               type='text'
               name='username'
               value={form.username}
               hasError='true'
               placeholder='Enter the username'
               onChange={e => handleChange(e)}
            />
            <InputError>Invalid Username</InputError>
         </FormItem>
         <FormItem>
            <Label htmlFor='email'>Email</Label>
            <Input
               type='email'
               name='email'
               value={form.email}
               hasError='true'
               placeholder='Enter the email'
               onChange={e => handleChange(e)}
            />
            <InputError>Invalid Email</InputError>
         </FormItem>
         <FormItem>
            <Label htmlFor='password'>Password</Label>
            <Input
               type='password'
               name='password'
               hasError='true'
               value={form.password}
               placeholder='Enter the password'
               onChange={e => handleChange(e)}
            />
            <InputError>
               Password must contain a lowercase/uppercase letter, a number, a
               symbol and must be atleast 8 characters longs.
            </InputError>
         </FormItem>
      </div>
   )
})
