import React from 'react'
import { ButtonStyled } from './Styled'

export function Button({
  children, type, onClick, htmlType,
}) {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      htmlType={htmlType}
    >
      {children}
    </ButtonStyled>
  )
}
