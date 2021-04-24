import React, { useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { MenuStyled } from './Styled'
import { MenuItem } from '../../Components/MenuItem'
import { routes } from '../../routes'
import { onSelectMenuKey } from './onSelectMenuKey'

export function Menu({ mode }) {
  const locationPath = useLocation().pathname

  useEffect(() => {
  }, [locationPath])

  return (
    <MenuStyled
      onClick={onSelectMenuKey}
      selectedKeys={[locationPath]}
      mode={mode}
    >
      {routes.map(({ path, title }) => (
        <MenuItem key={path}>
          <RouterLink to={path}>{title}</RouterLink>
        </MenuItem>
      ))}
    </MenuStyled>
  )
}
