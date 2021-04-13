import React from 'react'
import {useHistory} from 'react-router-dom'
import {LogInOutStyled} from './Styled';
import {Button} from '../../Components/Button';


export function LogInOutCmp(props){
    const history = useHistory()
    let btnText
    let onClickFunc

    if (props.isLogged){
        btnText = 'LogOut'
        onClickFunc = ()=>{console.log('POST LogOut')}
    }else {
        btnText = 'LogIn'
        onClickFunc = ()=>{history.push(`/identification/:registration`)}
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
