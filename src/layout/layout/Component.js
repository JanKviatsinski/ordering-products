import React from 'react'
import {LayoutStyled} from './Styled';

export function Layout(props){
    return(
        <LayoutStyled {...props}>{props.children}</LayoutStyled>
    )
}
