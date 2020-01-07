import styled, { css } from 'styled-components'

export const StyledInput = styled.input(
   ({ theme: { colors, size }, hasError }) => css`
      font-weight: 500;
      height: ${size.xl}px;
      color: ${colors.white};
      background: transparent;
      font-size: ${size.sm}px;
      padding: 0 12px 3px 12px;
      border-radius: ${size.xs}px;
      border: 1px solid ${hasError ? colors.danger : colors.dark['200']};
      &::placeholder {
         color: ${colors.dark['100']};
      }
   `
)
