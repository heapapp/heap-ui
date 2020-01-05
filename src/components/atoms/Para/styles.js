import styled, { css } from 'styled-components'

export const StyledP = styled.p(
   ({ theme: { colors, size } }) => css`
      font-size: ${size.sm}px;
      font-weight: 300;
      line-height: ${size.md}px;
      letter-spacing: 0.2px;
      a {
         color: ${colors.blue['100']};
      }
   `
)
