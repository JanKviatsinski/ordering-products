import React from 'react'
import { TypographyStyled } from './Styled'

export function Typography(props) {
  return (
    <TypographyStyled {...props}>{props.children}</TypographyStyled>
  )
}
