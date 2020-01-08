import styled, { css } from 'styled-components'

export const StyledSelect = styled.div(
   ({ theme: { colors, size } }) => css`
      width: auto;
      cursor: pointer;
      position: relative;
      height: ${size.xl}px;
      border-radius: ${size.xs}px;
      border: 1px solid ${colors.dark['200']};
   `
)

export const StyledSelectInput = styled.div(
   ({ theme: { colors, size } }) => css`
      display: grid;
      align-items: center;
      height: ${size.xl - 2}px;
      grid-template-columns: 1fr ${size.lg}px ${size.lg}px;
      &:hover,
      &:focus {
         background: ${colors.dark['200']};
      }
      div:first-child {
         display: flex;
         padding: 0 12px;
         user-select: none;
         align-items: center;
         height: ${size.xl - 2}px;
         color: ${colors.blue['100']};
      }
      [data-type='icon'] {
         display: flex;
         align-items: center;
         justify-content: center;
         svg {
            stroke: ${colors.blue['100']};
         }
         span {
            display: flex;
            border-radius: 50%;
            width: ${size.md}px;
            align-items: center;
            height: ${size.md}px;
            justify-content: center;
            &:hover {
               background: ${colors.dark['300']};
            }
         }
      }
   `
)

export const StyledSelectOptions = styled.div(
   ({ theme: { colors, size } }) => css`
      left: 0;
      top: 44px;
      width: 100%;
      z-index: 100;
      overflow-y: auto;
      user-select: none;
      max-height: 176px;
      position: absolute;
      border-radius: 8px;
      padding: ${size.xs}px 0;
      background: ${colors.dark['200']};
      &::-webkit-scrollbar {
         width: ${size.xs}px;
      }
      &::-webkit-scrollbar-thumb {
         border-radius: ${size.xs}px;
         background-color: ${colors.dark['300']};
      }
   `
)

export const StyledSelectOption = styled.div(
   ({ theme: { colors, size }, isSelected }) => css`
      color: #fff;
      display: flex;
      padding: 0 12px;
      align-items: center;
      height: ${size.xl}px;
      background: ${isSelected && colors.dark['300']};
      &:hover,
      &:focus {
         background: ${colors.dark['300']};
      }
   `
)
