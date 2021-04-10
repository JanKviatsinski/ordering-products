import React from 'react'
import {ImageStyled} from './Styled';

export function Image(props){
    return(
        <ImageStyled
            src={props.src}
            alt={props.alt}
            {...props}
        >
            {props.children}
        </ImageStyled>
    )
}
