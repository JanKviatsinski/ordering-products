import React from 'react'
import { ButtonStyled } from './Styled'

export function Button({ children, type, onClick }) {
  return (
    <ButtonStyled type={type} onClick={onClick}>{children}</ButtonStyled>
  )
}
