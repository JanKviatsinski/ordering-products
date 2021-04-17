import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthenticationPg } from './Components/AuthenticationPage'
import { RegistrationPg } from './Components/RegistrationPage'
import { PATH_AUTHENTICATION } from '../../pathes'

export function IdentificationContainer({ match }) {
  const { url } = match
  return (
    <Switch>
      <Route
        path={url}
        exact
        component={() => <RegistrationPg />}
      />

      <Route
        path={`${url}${PATH_AUTHENTICATION}`}
        component={() => <AuthenticationPg />}
      />
    </Switch>
  )
}
