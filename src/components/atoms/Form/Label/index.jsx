import React from 'react'

import { StyledLabel } from './styles'

const Label = ({ children, ...props }) => (
   <StyledLabel {...props}>{children}</StyledLabel>
)

export default Label
