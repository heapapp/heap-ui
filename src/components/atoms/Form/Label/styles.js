import styled, { css } from 'styled-components'

export const StyledLabel = styled.label(
   ({ theme: { colors, size } }) => css`
      font-weight: 600;
      text-transform: uppercase;
      font-size: ${size.sm - 2}px;
      color: ${colors.dark['100']};
      margin-bottom: ${size.xs}px;
   `
)
