import React from 'react'
import { MenuItemStyled } from './Styled'

export function MenuItem(props) {
  return (
    <MenuItemStyled {...props}>{props.children}</MenuItemStyled>
  )
}
