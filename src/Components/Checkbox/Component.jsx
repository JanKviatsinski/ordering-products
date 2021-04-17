import React from 'react'
import { CheckboxStyled } from './Styled'

export function Checkbox(props) {
  return (
    <CheckboxStyled {...props}>
      {props.children}
    </CheckboxStyled>
  )
}
