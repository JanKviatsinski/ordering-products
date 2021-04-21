import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { MenuStyled } from './Styled'
import { MenuItem } from '../../Components/MenuItem'
import { routes } from '../../routes'
import { history } from '../../history'
import { onSelectMenuKey } from './onSelectMenuKey'

export function Menu() {
  const selectedKey = history.location.pathname

  return (
    <MenuStyled
      onClick={onSelectMenuKey}
      selectedKeys={[selectedKey]}
      mode="vertical"
    >
      {routes.map(({ path, title }) => (
        <MenuItem key={path}>
          <RouterLink to={path}>{title}</RouterLink>
        </MenuItem>
      ))}
    </MenuStyled>
  )
}
