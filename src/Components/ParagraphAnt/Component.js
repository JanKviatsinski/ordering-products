import React from 'react'
import {ParagraphAntStyled} from './Styled';

export function ParagraphAnt(props){
    return(
        <ParagraphAntStyled {...props}>{props.text}</ParagraphAntStyled>
    )
}
