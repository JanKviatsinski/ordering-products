import React from 'react'
import {LogInOutStyled} from './Styled';
import {Button} from '../../Components/Button/Component';

export function LogInOut(props){
    //из стора будет loggedIn
    const  loggedIn = false
    let btnText
    let onClickFunc

    if (loggedIn){
        btnText = 'LogOut'
        onClickFunc = ()=>{console.log('LogOut')}
    }else {
        btnText = 'LogIn'
        onClickFunc = ()=>{console.log('LogIn')}
    }

    return(
        <LogInOutStyled {...props}>
            <Button
                type='primary'
                onClick={onClickFunc}
                {...props}
            >
                {btnText}
            </Button>
        </LogInOutStyled>
    )
}
