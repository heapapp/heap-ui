import styled, { css } from 'styled-components'

export const StyledError = styled.span(
   ({ theme: { colors, size } }) => css`
      font-style: italic;
      color: ${colors.danger};
      padding: 0 ${size.sm}px;
      font-size: ${size.sm - 2}px;
      margin-top: ${size.xs / 2}px;
   `
)
