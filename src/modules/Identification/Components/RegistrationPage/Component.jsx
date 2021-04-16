import React from 'react'
import { Wrap } from './Styled'
import { RegistrationForm } from '../../../RegistrationForm'
import { Greeting } from '../../../Greeting'

export function RegistrationPg() {
  return (
    <Wrap>
      <Greeting />
      <RegistrationForm />
    </Wrap>
  )
}
