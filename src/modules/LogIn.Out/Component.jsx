import React from 'react'
import { LogInOutStyled } from './Styled'
import { Button } from '../../Components/Button'

// как лучше назвать этот компонент?
export function LogInOutCmp({ logged, clickLogInOutBtn }) {
  let btnText
  let onClickFunc

  if (logged) {
    btnText = 'LogOut'
    onClickFunc = () => {
      console.log('POST LogOut')
    }// это сделаю когда будет готова регистрация
  } else {
    btnText = 'LogIn'
    onClickFunc = () => {
      console.log('asas')
      clickLogInOutBtn()
      // props.clickLogInOutBtn('/identification')
    }
  }

  return (
    <LogInOutStyled>
      <Button
        type="primary"
        onClick={onClickFunc}
      >
        {btnText}
      </Button>
    </LogInOutStyled>
  )
}
