import styled, { css } from 'styled-components'

export const StyledFormItem = styled.div(
   ({ theme: { size } }) => css`
      display: flex;
      flex-direction: column;
      margin-bottom: ${size.sm}px;
   `
)
