import React from 'react'
import { MainMenuWrapStyled } from './Styled'

export function MainMenuWrap({ children }) {
  return (
    <MainMenuWrapStyled>
      {children}
    </MainMenuWrapStyled>
  )
}
