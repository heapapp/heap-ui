import React from 'react'
import { StyledTags } from './styles'

const TagGroup = ({ children, maxWidth }) => (
   <StyledTags maxWidth={maxWidth}>{children}</StyledTags>
)

export default TagGroup
