import React from 'react'
import {MenuStyled} from './Styled';
import {MenuItem} from '../../Components/MenuItem';
import {routes} from '../../routes';
import {Link as RouterLink} from 'react-router-dom';

export function MenuCmp(props) {
    console.log(props)
    return (
        <MenuStyled
            onClick={props.selectMenuKey} selectedKeys={[props.selectedKey]} mode="vertical"
        >
            {routes.map(({ path, title }) => (
                <MenuItem key={path}>
                    <RouterLink to={path}>{title}</RouterLink>
                </MenuItem>
            ))}
        </MenuStyled>
    )
}
