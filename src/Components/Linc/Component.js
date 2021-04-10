import React from 'react'
import {LincStyled} from './Styled';

export function Linc(props){
    return(
        <LincStyled {...props}>{props.children}</LincStyled>
    )
}
