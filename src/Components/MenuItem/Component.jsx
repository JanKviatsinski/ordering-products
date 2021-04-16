import React from 'react'
import { MenuItemStyled } from './Styled'

export function MenuItems(props) {
  console.log(props)
  return (
    <MenuItemStyled {...props}>{props.children}</MenuItemStyled>
  )
}
