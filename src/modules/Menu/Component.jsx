import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { MenuStyled } from './Styled'
import { MenuItem } from '../../Components/MenuItem'
import { routes } from '../../routes'

export function MenuCmp({ selectMenuKey, selectedKey }) {
  return (
    <MenuStyled
      onClick={selectMenuKey}
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
