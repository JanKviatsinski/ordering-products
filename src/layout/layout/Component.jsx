import React from 'react'
import { LayoutStyled } from './Styled'

export function Layout({ children }) {
  console.log(children)
  return (
    <LayoutStyled>{children}</LayoutStyled>
  )
}
