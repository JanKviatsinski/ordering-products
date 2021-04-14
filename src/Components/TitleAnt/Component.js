import React from 'react'
import {TitleAntStyled} from './Styled';

export function TitleAnt(props){
    return(
        <TitleAntStyled {...props}>{props.text}</TitleAntStyled>
    )
}
