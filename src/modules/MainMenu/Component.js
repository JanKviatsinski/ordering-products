import React from 'react'
import {MainMenuStyled} from './Styled';
import {MenuItem} from '../../Components/MenuItem/Component';
import {routes} from '../../routes';
import {Link} from '../../Components/Link/Component';

export function MainMenu(props) {
    return (
        <MainMenuStyled
            onClick={''} selectedKeys={['']} mode="vertical"
        >
            {routes.map(({ path, title }) => (
                <MenuItem key={path}>
                    <Link to={path}>{title}</Link>
                </MenuItem>
            ))}
        </MainMenuStyled>
    )
}

