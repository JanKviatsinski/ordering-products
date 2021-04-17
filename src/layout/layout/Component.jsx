import React from 'react'
import { LayoutStyled } from './Styled'

export function Layout({ children }) {
  return (
    <LayoutStyled>{children}</LayoutStyled>
  )
}
