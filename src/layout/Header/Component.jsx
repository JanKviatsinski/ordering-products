import React from 'react'
import { HeaderStyled, MenuWrapStyled } from './Styled'
import { OwnerDataCard } from '../../modules/OwnerData'
import { Menu } from '../../modules/Menu'
import { LogInOut } from '../../modules/AuthenticationСontroller'

export function Header() {
  return (
    <HeaderStyled>
      <OwnerDataCard />
      <MenuWrapStyled>
        <Menu mode="vertical" />
        <LogInOut />
      </MenuWrapStyled>
    </HeaderStyled>
  )
}
