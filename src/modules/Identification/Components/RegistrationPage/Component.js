import React from 'react'
import {Wrap} from './Styled'
import {RegistrationForm} from '../../../RegistrationForm';
import {Greeting} from '../../../Greeting';

export function RegistrationPg(props) {
    return (
        <Wrap {...props}>
            <Greeting/>
            <RegistrationForm/>
        </Wrap>
    )
}
