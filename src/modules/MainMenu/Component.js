import React from 'react'
import {MainMenuStyled} from './Styled';

export function MainMenu(props){
    return(
        <MainMenuStyled {...props}>{props.children}</MainMenuStyled>
    )
}
