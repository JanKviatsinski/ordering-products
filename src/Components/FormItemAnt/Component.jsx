import React from 'react'
import { FormItemStyled } from './Styled'

export function FormItemAnt({ name, children, rules }) {
  return (
    <FormItemStyled name={name} rules={rules}>{children}</FormItemStyled>
  )
}
