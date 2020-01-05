import React from 'react'
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5 } from './styles'

const Heading = ({ type, children }) => {
   switch (type) {
      case 'h1':
         return <StyledH1>{children}</StyledH1>
      case 'h2':
         return <StyledH2>{children}</StyledH2>
      case 'h3':
         return <StyledH3>{children}</StyledH3>
      case 'h4':
         return <StyledH4>{children}</StyledH4>
      case 'h5':
         return <StyledH5>{children}</StyledH5>
      default:
         return <StyledH1>{children}</StyledH1>
   }
}

export default Heading
