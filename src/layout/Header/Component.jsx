import React from 'react'
import { HeaderStyled } from './Styled'

export function Header({ children }) {
  return (
    <HeaderStyled>{children}</HeaderStyled>
  )
}
