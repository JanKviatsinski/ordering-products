import React from 'react'
import {HeaderStyled} from './Styled';

export function Header(props){
    return(
        <HeaderStyled {...props}>{props.children}</HeaderStyled>
    )
}
