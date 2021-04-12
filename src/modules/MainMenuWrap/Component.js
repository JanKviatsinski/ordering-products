import React from 'react'
import {MainMenuWrapStyled} from './Styled';

export function MainMenuWrap(props){
    return(
        <MainMenuWrapStyled>
            {props.children}
        </MainMenuWrapStyled>
    )
}
