import styled, { css } from 'styled-components'

export const StyledInput = styled.textarea(
   ({ theme: { colors, size }, hasError }) => css`
      font-weight: 500;
      max-height: 480px;
      min-height: 160px;
      color: ${colors.white};
      background: transparent;
      font-size: ${size.sm}px;
      border-radius: ${size.xs}px;
      padding: 10px 10px 10px 12px;
      border: 1px solid ${hasError ? colors.danger : colors.dark['200']};
      &::placeholder {
         color: ${colors.dark['100']};
      }
   `
)
