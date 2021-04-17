import React from 'react'
import { FormStyled } from './Styled'

export function Form(props) {
  return (
    <FormStyled {...props}>
      {props.children}
    </FormStyled>
  )
}
