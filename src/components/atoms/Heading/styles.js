import styled, { css } from 'styled-components'

export const StyledH1 = styled.h1(
   ({ theme: { typography } }) => css`
      font-size: ${typography.h1.fS};
      font-weight: ${typography.h1.fW};
      line-height: ${typography.h1.lH};
   `
)

export const StyledH2 = styled.h2(
   ({ theme: { typography } }) => css`
      font-size: ${typography.h2.fS};
      font-weight: ${typography.h2.fW};
      line-height: ${typography.h2.lH};
   `
)

export const StyledH3 = styled.h3(
   ({ theme: { typography } }) => css`
      font-size: ${typography.h3.fS};
      font-weight: ${typography.h3.fW};
      line-height: ${typography.h3.lH};
   `
)

export const StyledH4 = styled.h4(
   ({ theme: { typography } }) => css`
      font-size: ${typography.h4.fS};
      font-weight: ${typography.h4.fW};
      line-height: ${typography.h4.lH};
   `
)

export const StyledH5 = styled.h4(
   ({ theme: { typography } }) => css`
      font-size: ${typography.h5.fS};
      font-weight: ${typography.h5.fW};
      line-height: ${typography.h5.lH};
   `
)
