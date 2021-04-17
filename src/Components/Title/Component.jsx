import React from 'react'
import { TitleStyled } from './Styled'

export function Title({ level, text }) {
  return (
    <TitleStyled level={level}>{text}</TitleStyled>
  )
}
