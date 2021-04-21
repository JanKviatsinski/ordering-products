import React from 'react'
import { LogInOutStyled } from './Styled'
import { Button } from '../../Components/Button'
import { onClickLogInBtn } from './onClickLogInBtn'
import { onClickLogOutBtn } from './onClickLogOutBtn'

// как лучше назвать этот компонент?
export function LogInOutCmp({ logged }) {
  let btnText
  let onClickFunc

  if (logged) {
    btnText = 'Log Out'
    onClickFunc = () => onClickLogOutBtn()
  } else {
    btnText = 'Log In'
    onClickFunc = () => onClickLogInBtn()
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
