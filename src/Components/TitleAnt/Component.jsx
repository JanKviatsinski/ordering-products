import React from 'react'
import { TitleAntStyled } from './Styled'

export function TitleAnt({ level, text }) {
  return (
    <TitleAntStyled level={level}>{text}</TitleAntStyled>
  )
}
