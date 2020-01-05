import styled, { css } from 'styled-components'

export const StyledTag = styled.span(
   ({ theme: { colors, size } }) => css`
      height: ${size.lg}px;
      padding: 0 12px;
      font-size: 14px;
      line-height: ${size.lg}px;
      border-radius: ${size.sm / 2}px;
      display: inline-block;
      background: ${colors.dark['200']};
   `
)
