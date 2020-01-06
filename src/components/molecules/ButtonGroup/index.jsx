import React from 'react'

import { StyledGroup } from './styles'

const ButtonGroup = ({ children, ...props }) => {
   return <StyledGroup {...props}>{children}</StyledGroup>
}

export default ButtonGroup
