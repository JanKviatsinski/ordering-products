import React from 'react'
import { FormItemStyled } from './Styled'

export function FormItem(props) {
  return (
    <FormItemStyled {...props}>{props.children}</FormItemStyled>
  )
}
