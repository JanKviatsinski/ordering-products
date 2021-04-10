import React from 'react'
import {OwnerAvatarStyled} from './Styled';

export function OwnerAvatar(props){
    return(
        <OwnerAvatarStyled {...props}>{props.children}</OwnerAvatarStyled>
    )
}
