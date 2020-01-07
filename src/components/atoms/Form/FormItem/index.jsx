import React from 'react'

import { StyledFormItem } from './styles'

const FormItem = ({ children, ...props }) => (
   <StyledFormItem {...props}>{children}</StyledFormItem>
)

export default FormItem
