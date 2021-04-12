import React from 'react'
import {LinkStyled} from './Styled';

export function Link(props){
    return(
        <LinkStyled {...props}>{props.children}</LinkStyled>
    )
}
