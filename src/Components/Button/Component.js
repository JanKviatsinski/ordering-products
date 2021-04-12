import React from 'react'
import {ButtonStyled} from './Styled';

export function Button(props){
    return(
        <ButtonStyled {...props}>{props.children}</ButtonStyled>
    )
}
