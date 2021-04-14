import React from 'react'
import {TypographyAntStyled} from './Styled';

export function TypographyAnt(props){
    return(
        <TypographyAntStyled {...props}>{props.children}</TypographyAntStyled>
    )
}
