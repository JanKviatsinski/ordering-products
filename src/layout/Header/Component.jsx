import React from 'react'
import { HeaderStyled } from './Styled'
import { OwnerDataCard } from '../../modules/OwnerData'
import { MainMenuWrap } from '../../modules/MainMenuWrap'
import { Menu } from '../../modules/Menu'
import { LogInOut } from '../../modules/AuthenticationСontroller'

export function Header() {
  return (
    <HeaderStyled>
      <OwnerDataCard />
      <MainMenuWrap>
        <Menu
          mode="vertical"
        />
        <LogInOut />
      </MainMenuWrap>
    </HeaderStyled>
  )
}
