import React from 'react'
import { HeaderStyled, MenuWrapStyled } from './Styled'
import { OwnerDataCard } from '../../modules/OwnerData'
import { Menu } from '../../modules/Menu'
import { LogInOut } from '../../modules/Authentication–°ontroller'

export function Header() {
  return (
    <HeaderStyled>
      <OwnerDataCard />
      <MenuWrapStyled>
        <Menu
          mode="vertical"
          color=" "
          border_radius=" "
        />
        <LogInOut />
      </MenuWrapStyled>
    </HeaderStyled>
  )
}
