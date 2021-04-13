import React from 'react';
import {Switch, Route,} from 'react-router-dom'
import {AuthenticationPg} from './Components/AuthenticationPage';
import {RegistrationPg} from './Components/RegistrationPage';

export function IdentificationContainer(props) {
    const url = props.match.url

    return (
        <Switch>
            <Route path={url} exact component={() =>
                <AuthenticationPg/>
            }/>

            <Route path={`${url}/:registration`}
                   component={() =>
                       <RegistrationPg/>
                   }/>
        </Switch>
    )
}