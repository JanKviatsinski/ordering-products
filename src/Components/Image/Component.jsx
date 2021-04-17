import React from 'react'
import { ImageStyled } from './Styled'

export function Image({ src, alt }) {
  return (
    <ImageStyled src={src} alt={alt} />
  )
}
