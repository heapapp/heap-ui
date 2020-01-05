import styled, { css } from 'styled-components'

export const StyledTags = styled.div(
   ({ maxWidth }) => css`
      max-width: ${maxWidth}px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      span {
         margin: 0 6px 6px 0;
      }
   `
)
