import React from 'react'
import { ImageStyled } from './Styled'

export function Image(children) {
  return (
    <ImageStyled>
      {children}
    </ImageStyled>
  )
}
// not children
