import React from 'react'
import {ImageStyled} from './Styled';

export function Image(props){
    return(
        <ImageStyled {...props}>
            {props.children}
        </ImageStyled>
    )
}
