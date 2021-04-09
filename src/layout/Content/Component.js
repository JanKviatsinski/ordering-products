import React from 'react'
import {Wrap} from './Styled';

export function Content(props){
    return(
        <Wrap>{props.children}</Wrap>
    )
}
