import React, { useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { MenuStyled } from './Styled'
import { MenuItem } from '../../Components/MenuItem'
import { routes } from '../../routes'
import { history } from '../../history'

export function Menu({ mode }) {
  const locationPath = useLocation().pathname

  useEffect(() => {
  }, [locationPath])

  return (
    <MenuStyled
      onClick={(event) => history.push(event.key)}
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
