import styled, { css } from 'styled-components'

export const StyledGroup = styled.div(
   ({ theme: { size }, align }) => css`
      display: flex;
      button {
         ${align === 'left' &&
            css`
               &:not(:first-child) {
                  margin-left: ${size.sm}px;
               }
            `};
         ${align === 'right' &&
            css`
               &:not(:first-child) {
                  margin-right: ${size.sm}px;
               }
            `};
      }
   `
)
