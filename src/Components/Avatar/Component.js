import React from 'react'
import {AvatarStyled} from './Styled';

export function Avatar(props){
    return(
        <AvatarStyled {...props}>{props.children}</AvatarStyled>
    )
}
