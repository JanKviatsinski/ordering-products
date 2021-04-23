import React from 'react'
import { Wrap } from './Styled'
import { Button } from '../../Components/Button'
import { onLogIn } from './onLogIn'

export function AuthenticationController({ logged, onLogOut }) {
  let btnText
  let onClickFunc

  if (logged) {
    btnText = 'Log Out'
    onClickFunc = () => onLogOut()
  } else {
    btnText = 'Log In'
    onClickFunc = () => onLogIn()
  }

  return (
    <Wrap>
      <Button
        type="primary"
        onClick={onClickFunc}
      >
        {btnText}
      </Button>
    </Wrap>
  )
}
