import React from 'react'
import {LinkAntStyled} from './Styled';

export function LinkAnt(props){
    return(
        <LinkAntStyled {...props}>{props.children}</LinkAntStyled>
    )
}
