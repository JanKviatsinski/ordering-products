import React from 'react'
import {Wrap} from './Styled';

export function Header(props){
    return(
        <Wrap>{props.children}</Wrap>
    )
}
