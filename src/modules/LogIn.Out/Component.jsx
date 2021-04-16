import React from 'react'
import { useHistory } from 'react-router-dom'
import { LogInOutStyled } from './Styled'
import { Button } from '../../Components/Button'

// как лучше назвать этот компонент?
export function LogInOutCmp({ logged }) {
  const history = useHistory()
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
      history.push('/identification/registration')
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
